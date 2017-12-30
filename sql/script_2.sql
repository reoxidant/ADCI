SELECT count(course.name), course.name, history.start FROM history 
INNER JOIN  course ON history.course_id = course.course_id 
INNER JOIN  trainee ON history.trainee_id = trainee.trainee_id WHERE history.status = 1 GROUP by name ORDER BY start;