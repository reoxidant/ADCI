SELECT trainee.name, trainee.email, course.name, history.end FROM history 
INNER JOIN course ON history.course_id = course.course_id 
INNER JOIN trainee ON history.trainee_id = trainee.trainee_id WHERE course.name = "PHP" AND status = 1 ORDER BY end;