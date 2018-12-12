import React from 'react';

import CoursesListApp from './CoursesList';

const CoursesApp = (...props)=> (
  
  
    
      <div className="ContentApp  grey lighten-5">
      <div class="row">

         <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input id="icon_prefix" type="text" name="course_name" class="validate" />
          <label for="icon_prefix">Nombre del curso</label>
        </div>
        <div class="input-field col s6">
          <input id="icon_telephone" type="tel" name="course_teacher" class="validate"/>
          <label for="icon_telephone">Profesor</label>
        </div>
      </div>
      <input type="hidden" id="id_course" value={Math.floor(Math.random()*100)} />
    </form>

    </div>
      
      
        <CoursesListApp />
            
     
      </div>
    );
  



export default CoursesApp;
