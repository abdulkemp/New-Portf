const db = require('../config');


class Experience {
    fetchExperiences(req, res) {
        const fetchAllExperiences = `SELECT * FROM Experiences;`;

        db.query(fetchAllExperiences, (err, results) => {
            if (err) throw err;
            res.status(200).json({
                results: results
            });
        });
    };
    fetchExperience(req, res) {
        const fetchExperienceQuery = `SELECT * FROM Experiences WHERE idExperiences = ?;`;

        db.query(fetchExperienceQuery, [req.params.id], (err, results) => {
            if (err) throw err;
            res.status(200).json({
                results: results
            });
        });
    };
    addExperience(req, res) {
        const addExperienceQuery = `INSERT INTO Experiences SET ?;`;

        db.query(addExperienceQuery, [req.body], (err) => {
            if (err) {
                res.status(400).json({
                    err: 'Unable to insert a new record.'
                }), console.log(err);;
            } else {
                res.status(200).json({
                    msg: 'Experience saved'
                });
            };
        });
    };
    updateExperience(req, res) {
        const updateQuery = `UPDATE Experiences SET ? WHERE idExperiences = ?;`;

        db.query(updateQuery, [req.body, req.params.id], (err) => {
            if (err) {
                console.log(err);
                res.status(400).json({
                    err: 'Unable to update a record.'
                });
            } else {
                res.status(200).json({
                    msg: 'Experience updated'
                });
            };
        });
    }
    deleteExperience(req, res) {
        const deleteQuery = `DELETE FROM Experiences WHERE idExperiences = ?;`;

        db.query(deleteQuery, [req.params.id], (err) => {
            if (err) res.status(400).json({
                err: 'The record was not found.'
            });
            res.status(200).json({
                msg: 'A Experience was deleted'
            });
        });
    };
};

class Skill {
    fetchSkills(req, res) {
        const fetchAllSkills = `SELECT * FROM Skills;`;

        db.query(fetchAllSkills, (err, results) => {
            if (err) throw err;
            res.status(200).json({
                results: results
            });
        });
    };
    fetchSkill(req, res) {
        const fetchSkillQuery = `SELECT * FROM Skills WHERE idSkills = ?;`;

        db.query(fetchSkillQuery, [req.params.id], (err, results) => {
            if (err) throw err;
            res.status(200).json({
                results: results
            });
        });
    };
    addSkill(req, res) {
        const addSkillQuery = `INSERT INTO Skills SET ?;`;

        db.query(addSkillQuery, [req.body], (err) => {
            if (err) {
                res.status(400).json({
                    err: 'Unable to insert a new record.'
                }), console.log(err);;
            } else {
                res.status(200).json({
                    msg: 'Skill saved'
                });
            };
        });
    };
    updateSkill(req, res) {
        const updateQuery = `UPDATE Skills SET ? WHERE idSkills = ?;`;

        db.query(updateQuery, [req.body, req.params.id], (err) => {
            if (err) {
                console.log(err);
                res.status(400).json({
                    err: 'Unable to update a record.'
                });
            } else {
                res.status(200).json({
                    msg: 'Skill updated'
                });
            };
        });
    }
    deleteSkill(req, res) {
        const deleteQuery = `DELETE FROM Skills WHERE idSkills = ?;`;

        db.query(deleteQuery, [req.params.id], (err) => {
            if (err) res.status(400).json({
                err: 'The record was not found.'
            });
            res.status(200).json({
                msg: 'A Skill was deleted'
            });
        });
    };
};

class Testimonial {
    fetchTestimonials(req, res) {
        const fetchAllTestimonials = `SELECT * FROM Testimonials;`;

        db.query(fetchAllTestimonials, (err, results) => {
            if (err) throw err;
            res.status(200).json({
                results: results
            });
        });
    };
    fetchTestimonial(req, res) {
        const fetchTestimonialQuery = `SELECT * FROM Testimonials WHERE idTestimonials = ?;`;

        db.query(fetchTestimonialQuery, [req.params.id], (err, results) => {
            if (err) throw err;
            res.status(200).json({
                results: results
            });
        });
    };
    addTestimonial(req, res) {
        const addTestimonialQuery = `INSERT INTO Testimonials SET ?;`;

        db.query(addTestimonialQuery, [req.body], (err) => {
            if (err) {
                res.status(400).json({
                    err: 'Unable to insert a new record.'
                }), console.log(err);;
            } else {
                res.status(200).json({
                    msg: 'Testimonial saved'
                });
            };
        });
    };
    updateTestimonial(req, res) {
        const updateQuery = `UPDATE Testimonials SET ? WHERE idTestimonials = ?;`;

        db.query(updateQuery, [req.body, req.params.id], (err) => {
            if (err) {
                console.log(err);
                res.status(400).json({
                    err: 'Unable to update a record.'
                });
            } else {
                res.status(200).json({
                    msg: 'Testimonial updated'
                });
            };
        });
    }
    deleteTestimonial(req, res) {
        const deleteQuery = `DELETE FROM Testimonials WHERE idTestimonials = ?;`;

        db.query(deleteQuery, [req.params.id], (err) => {
            if (err) res.status(400).json({
                err: 'The record was not found.'
            });
            res.status(200).json({
                msg: 'A Testimonial was deleted'
            });
        });
    };
};


class Project {
    fetchProjects(req, res) {
        const fetchAllProjects = `SELECT * FROM Projects;`;

        db.query(fetchAllProjects, (err, results) => {
            if (err) throw err;
            res.status(200).json({
                results: results
            });
        });
    };
    fetchProject(req, res) {
        const fetchProjectQuery = `SELECT * FROM Projects WHERE idProjects = ?;`;

        db.query(fetchProjectQuery, [req.params.id], (err, results) => {
            if (err) throw err;
            res.status(200).json({
                results: results
            });
        });
    };
    addProject(req, res) {
        const addProjectQuery = `INSERT INTO Projects SET ?;`;

        db.query(addProjectQuery, [req.body], (err) => {
            if (err) {
                res.status(400).json({
                    err: 'Unable to insert a new record.'
                }), console.log(err);;
            } else {
                res.status(200).json({
                    msg: 'Project saved'
                });
            };
        });
    };
    updateProject(req, res) {
        const updateQuery = `UPDATE Projects SET ? WHERE idProjects = ?;`;

        db.query(updateQuery, [req.body, req.params.id], (err) => {
            if (err) {
                console.log(err);
                res.status(400).json({
                    err: 'Unable to update a record.'
                });
            } else {
                res.status(200).json({
                    msg: 'Project updated'
                });
            };
        });
    }
    deleteProject(req, res) {
        const deleteQuery = `DELETE FROM Projects WHERE idProjects = ?;`;

        db.query(deleteQuery, [req.params.id], (err) => {
            if (err) res.status(400).json({
                err: 'The record was not found.'
            });
            res.status(200).json({
                msg: 'A Project was deleted'
            });
        });
    };
};



module.exports = {
    Experience,
    Skill,
    Project,
    Testimonial
};