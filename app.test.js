const app = require('./app');
const request = require('supertest');
const bodyParser = require("body-parser")

const environment = process.env.NODE_ENV || 'test'
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)

describe('Server', () => {
	const convertDate = data => {
		return data.map(pro => {
			pro.updated_at = pro.updated_at.toJSON();
			pro.created_at = pro.created_at.toJSON();
			return pro;
		});
	}

	beforeEach(async () => {
		await database.seed.run()
	});
	describe('init', () => {
		it('should return a 200 status', async () => {
			const response = await request(app).get('/')
			expect(response.status).toBe(200)
		})
	})

	//GET /project:

	describe('GET /api/v1/projects', () => {
		it('should return all projects in the db project table if they exist', async () => {
			const expectedProject = await database('project').select().then(proj => convertDate(proj));

			const response = await request(app).get('/api/v1/project');
			const result = response.body;

			expect(result).toEqual(expectedProject);
    });

		//GET /project/:id:

		describe('GET /project/:id', () => {
			it.skip('should return a single project with the id in the params', async () => {
				//setup
				const expectedProject = await database('project').first()
				expectedProject.created_at = expectedProject.created_at.toJSON()
			expectedProject.updated_at = expectedProject.updated_at.toJSON()
			
				const id = expectedProject.id
	
				//execution
				const response = await request(app).get(`/api/v1/project/${id}`)
				const project = response.body
	
				//expectation
				expect(project).toEqual(expectedProject)
		})
	})
})
})


	//200 status code: it should return 200 status, async, create variable of response and await the request from app to get the project DB, expect response.status to be 200

	//404 status code: it should return 404 status, async, create variable of response and await the request from app to get the project DB with project id that is not found, expect response.status to be 404

	//500 status code: it should return 500 status if there is an internal server error, async, create variable of response and await the request from app to get project DB, expect response.status toBe 500

	//create describe block for GET /project/:id, should return a single project, async
		//setup: create variable of expectedProject assign to await the project DB and grab the first one .first(), create variable for id and assign to expectedProject.id
		//execution: create var. for response and await request(app).get(`/project/${id}`), create var. for project and assign to response body
		//expectation: expect project to equal the expectedProject

			//POST /project:

	//422 status code: it should return 422 status if there is an unprocessable entity error, async, create variable of response and await the request from app to get project DB, expect response.status toBe 422

	//create describe block for POST /project, it should post a new project to the DB, async
		//setup: create var. newProject assign to {name: "Project 500"}
		//execution: create var. of response and assign to await request(app).post('/project).send(newProject), create var. of the response body id, create var. of project and await the project DB where the ids match and grab the first one .first()
		//expectation: expect newProject.name  to equal project.name

		//PUT /project/:id:

	//200 status code: it should return 200 status, async, create variable of response and await the request from app to get the project DB, expect response.status to be 200

	//404 status code: it should return 404 status, async, create variable of response and await the request from app to get the project DB with project id that is not found, expect response.status to be 404

	//create describe block for /project/:id, it should update the current project with new info provided by user, async
		//setup: create var. updatedProject assign to await project DB and grab the first one .first(), create id var. and assign to updatedProject.id
		//execution: create response and assign to await the request(app).put(`/project/${id}`).send(updatedProject), create project var. and assign to await the project DB.where({ id: id }).first()
		//expectation: expect updatedProject to equal project

	//DELETE /project/:id:

	//200 status code: it should return 200 status, async, create variable of response and await the request from app to get the project DB, expect response.status to be 200

	//404 status code: it should return 404 status, async, create variable of response and await the request from app to get the project DB with project id that is not found, expect response.status to be 404

	//500 status code: it should return 500 status if there is an internal server error, async, create variable of response and await the request from app to get project DB, expect response.status toBe 500

	//describe DELETE /project/:id, it should delete the project from DB, async
	//setup: create var. of project and assign to await project DB and grab the first one .first(), create var. for id and assign to project.id
	//execution: create var. for response and assign to await request(app).delete(`/project/${id}`), create var for deletedProject and assign to await project DB where({ id: id }).first()
	//expectation: expect the deletedProject to equal undefined (because it was deleted)