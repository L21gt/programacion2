/*************  LABORATORIO IV   
 * 
 * Vamos a intentar juntar todos los elementos que hemos preparado anteriormente.
 * Creamos una clase Tutoring que tendrá dos listas de usuarios: alumnos y profesores
 * por separado
 * 
 * Define los métpdps en la clase:
 * 
 * + getStudentByName(name, surname)- que devolverá un studentobjeto con el nombre y 
 *                                    apellido indicados (o undefinedsi el estudiante no ha 
 *                                    sido agregado antes)
 * + getTeacherByName(name, surname)- que devolverá el teacherobjeto con el nombre y apellido 
 *                                    indicados (o undefinedsi el profesor no ha sido agregado
 *                                    antes)
 * + getStudentsForTeacher(teacher)- que devolverá una matriz de estudiantes a los que el 
 *                                   profesor puede dar tutoría;
 * + getTeacherForStudent(student)- que devolverá un conjunto de profesores capaces de dar 
 *                                  tutoría al estudiante;
 * + addStudent(name, surname, email)- que agregará un nuevo studentobjeto a la lista;
 * + addTeacher(name, surname, email)- que agregará un nuevo teacherobjeto a la lista.
 * 
 * Utilice clases previamente preparadas y sus métodos (por ejemplo match).
 * 
 * Pruebe su solución utilizando el siguiente código:
 */
let tutoring = new Tutoring();
tutoring.addStudent('Rafael', 'Fife','rfife@rhyta.com');
tutoring.addStudent('Kelly', 'Estes', 'k_estes@dayrep.com');
tutoring.addTeacher('Paula', 'Thompkins', 'PaulaThompkins@jourrapide.com');
let student = tutoring.getStudentByName('Rafael', 'Fife');
student.addCourse('maths', 2);
student.addCourse('physics', 4);
let teacher = tutoring.getTeacherByName('Paula', 'Thompkins');
teacher.addCourse('maths', 4);
let students = tutoring.getTeacherForStudent(student);
let teachers = tutoring.getStudentsForTeacher(teacher);
console.log(students[0]); // -> Teacher {name: 'Paula', surname: 'Thompkins', ...
console.log(teachers[0]); // -> Student {name: 'Rafael', surname: 'Fife', ...

student = tutoring.getStudentByName('Kelly', 'Estes');
students = tutoring.getTeacherForStudent(student);
teachers = tutoring.getStudentsForTeacher(teacher);
console.log(students[0]); // -> undefined
console.log(teachers[0]); // -> Student {name: 'Rafael', surname: 'Fife', ...