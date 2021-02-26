import { Request, Response } from "express";
import  { getCustomRepository } from "typeorm";
import { resolve } from "path";

import { SurveysRepository } from "../repositories/SurveysRepository";
import { UsersRepository } from "../repositories/UsersRepository";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";
import SendMailService from "../services/SendMailService";

class SendMailController {
  async execute(request: Request, response: Response) {
    const { email, survey_id } = request.body;
    const surveysRepository = getCustomRepository(SurveysRepository);
    const usersRepository = getCustomRepository(UsersRepository);
    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

    const user = await usersRepository.findOne({ email });
    if(!user) {
      return response.status(322).json({ error: "user does not exist" });
    }

    const survey = await surveysRepository.findOne({ id: survey_id });
    if(!survey) {
      return response.status(322).json({ error: "survey does not exist" });
    }

    const npsPath = resolve(__dirname, "..", "views", "emails", "npsMail.hbs");

    const surveyUsers = await surveysUsersRepository.findOne({
      where: [{ user_id: user.id }, { value: null }],
      relations: ["user", "survey"]
    });

    const variables = {
      name: user.name,
      title: survey.title,
      description: survey.description,
      id: "",
      link: process.env.URL_MAIL
    };

    if(surveyUsers) {
      variables.id = surveyUsers.id;
      await SendMailService.execute(email, survey.title, variables, npsPath);
      return response.json(surveyUsers);
    }

    const surveyUser = surveysUsersRepository.create({
      user_id: user.id,
      survey_id
    });

    await surveysUsersRepository.save(surveyUser);
    variables.id = surveyUser.id;

    await SendMailService.execute(email, survey.title, variables, npsPath);

    return response.status(202).json({ surveyUser })
  }
}

export { SendMailController }
