import {
  createStore
} from 'vuex'
import axios from "axios";

const portfolioUrl = "https://new-portfolio-64oc.onrender.com/";

export default createStore({
  state: {
    experience: null,
    experiences: null,
    skills: null,
    skill: null,
    testimonials: null,
    testimonial: null,
    showSpinner: null,
    message: null,
  },
  getters: {
    showSpinner(state) {
      return state.showSpinner;
    },
  },
  mutations: {
    setExperiences(state, value) {
      state.experiences = value;
    },
    setExperience(state, value) {
      state.experience = value;
    },
    setTestimonials(state, value) {
      state.testimonials = value;
    },
    setTestimonial(state, value) {
      state.testimonial = value;
    },
    setProjects(state, value) {
      state.projects = value;
    },
    setProject(state, value) {
      state.project = value;
    },
    setSkills(state, value) {
      state.skills = value;
    },
    setSkill(state, value) {
      state.skill = value;
    },
    setSpinner(state, value) {
      state.products = value;
    },
    setMessage(state, value) {
      state.products = value;
    },
  },
  actions: {
    // Experiences
    async fetchExperiences(context) {
      const res = await axios.get(`${portfolioUrl}experiences`);
      const {
        results,
        err
      } = await res.data;
      if (results) {
        context.commit("setExperiences", results);
      } else {
        context.commit(err);
      }
    },
    async fetchExperience(context) {
      const res = await axios.get(`${portfolioUrl}experience`);
      const {
        results,
        err
      } = await res.data;
      if (results) {
        context.commit("setExperience", results);
      } else {
        context.commit(err);
      }
    },
    // Skills
    async fetchSkills(context) {
      const res = await axios.get(`${portfolioUrl}skills`);
      const {
        results,
        err
      } = await res.data;
      if (results) {
        context.commit("setSkills", results);
      } else {
        context.commit(err);
      }
    },
    async fetchSkill(context) {
      const res = await axios.get(`${portfolioUrl}skill`);
      const {
        results,
        err
      } = await res.data;
      if (results) {
        context.commit("setSkill", results);
      } else {
        context.commit(err);
      }
    },
    // Projects
    async fetchProjects(context) {
      const res = await axios.get(`${portfolioUrl}projects`);
      const {
        results,
        err
      } = await res.data;
      if (results) {
        context.commit("setProjects", results);
      } else {
        context.commit(err);
      }
    },
    async fetchProject(context) {
      const res = await axios.get(`${portfolioUrl}project`);
      const {
        results,
        err
      } = await res.data;
      if (results) {
        context.commit("setProject", results);
      } else {
        context.commit(err);
      }
    },
    // Testimonials
    async fetchTestimonials(context) {
      const res = await axios.get(`${portfolioUrl}testimonials`);
      const {
        results,
        err
      } = await res.data;
      if (results) {
        context.commit("setTestimonials", results);
      } else {
        context.commit(err);
      }
    },
    async fetchTestimonial(context) {
      const res = await axios.get(`${portfolioUrl}testimonial`);
      const {
        results,
        err
      } = await res.data;
      if (results) {
        context.commit("setTestimonial", results);
      } else {
        context.commit(err);
      }
    },
  },
  modules: {}
})