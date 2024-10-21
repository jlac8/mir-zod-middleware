import express, {Application} from 'express';

const configExpress = (app: Application) => {
  app.use(express.json());
};

export default configExpress;
