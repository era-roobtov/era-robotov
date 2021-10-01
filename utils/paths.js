const navPaths = {
  home: '/',
  courses: '/courses',
  about: '/about',
  contact: '/contact',
  dynamicCourses: '/courses/[id]',
  getDynamicCourse: (id) => `/courses/${id}`
};

export default navPaths;
