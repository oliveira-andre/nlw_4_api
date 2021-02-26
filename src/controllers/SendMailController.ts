import { Request, Response } from "express";
import  { getCustomRepository } from "typeorm";

import { SurveysRepository } from "../repositories/SurveysRepository";
import { UsersRepository } from "../repositories/UsersRepository";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";

class SendMailController {
  async execute(request: Request, response: Response) {
    const { email, survey_id } = request.body;
    const surveysRepository = getCustomRepository(SurveysRepository);
    const usersRepository = getCustomRepository(UsersRepository);
    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

    const userAlreadyExists = await usersRepository.findOne({ email });
    if(!userAlreadyExists) {
      return response.status(322).json({ error: "user does not exist" });
    }

    const surveyAlreadyExists = await surveysRepository.findOne({ id: survey_id });
    if(!surveyAlreadyExists) {
      return response.status(322).json({ error: "survey does not exist" });
    }

    const surveyUser = surveysUsersRepository.create({
      user_id: userAlreadyExists.id,
      survey_id
    });

    await surveysUsersRepository.save(surveyUser);

    return response.status(202).json({ surveyUser })
  }
}

export { SendMailController }
