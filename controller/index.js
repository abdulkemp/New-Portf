const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const route = express.Router();
const {
    Skill,
    Experience,
    Project,
    Testimonial
    // Skill,
    // Experience,
    // Project,
    // Testimonial
} = require('../model');
const skill = new Skill();
const experience = new Experience();
const project = new Project()
const testimonial = new Testimonial();


// PROJECTS ROUTES

route.get('/projects', (req, res) => {
    project.fetchProjects(req, res);
});

route.get('/project/:id', (req, res) => {
    project.fetchProject(req, res);
});

route.post('/project', bodyParser.json(), (req, res) => {
    project.addProject(req, res);
});

route.put('/project/:id', bodyParser.json(), (req, res) => {
    project.updateProject(req, res);
});

route.delete('/project/:id', (req, res) => {
    project.deleteProject(req, res);
});

// EXPERIENCE ROUTES

route.get('/experiences', (req, res) => {
    experience.fetchExperiences(req, res);
});

route.get('/experience/:id', (req, res) => {
    experience.fetchExperience(req, res);
});

route.post('/experience', bodyParser.json(), (req, res) => {
    experience.addExperience(req, res);
});

route.put('/experience/:id', bodyParser.json(), (req, res) => {
    experience.updateExperience(req, res);
});

route.delete('/experience/:id', (req, res) => {
    experience.deleteExperience(req, res);
});

// SKILLS ROUTES

route.get('/skills', (req, res) => {
    skill.fetchSkills(req, res);
});

route.get('/skill/:id', (req, res) => {
    skill.fetchSkill(req, res);
});

route.post('/skill', bodyParser.json(), (req, res) => {
    skill.addSkill(req, res);
});

route.put('/skill/:id', bodyParser.json(), (req, res) => {
    skill.updateSkill(req, res);
});

route.delete('/skill/:id', (req, res) => {
    skill.deleteSkill(req, res);
});

// SKILLS ROUTES

route.get('/testimonials', (req, res) => {
    testimonial.fetchTestimonials(req, res);
});

route.get('/testimonial/:id', (req, res) => {
    testimonial.fetchTestimonial(req, res);
});

route.post('/testimonial', bodyParser.json(), (req, res) => {
    testimonial.addTestimonial(req, res);
});

route.put('/testimonial/:id', bodyParser.json(), (req, res) => {
    testimonial.updateTestimonial(req, res);
});

route.delete('/testimonial/:id', (req, res) => {
    testimonial.deleteTestimonial(req, res);
});

module.exports = route;