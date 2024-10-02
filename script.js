$(document).ready(function () {
    // Fetch the Pokédex data
    fetch("curData.json")
      .then((rawData) => rawData.json())
      .then((curriculum) => {
        // Loop the data
        curriculum.forEach(curriculumData => {
            let semester = curriculumData["semester"];
            let course = curriculumData["courses"];

            // Display the semester header
            $(".container").append(
                `<tr>
                    <td colspan="7" class="sem-level">${semester}</td>
                </tr>
                <tr>
                    <td class="course-color"><b>Course</b></td>
                    <td class="course-color"><b>Description</b></td>
                    <td class="course-color"><b>Unit</b></td>
                    <td class="course-color"><b>Grade</b></td>
                    <td class="course-color"><b>Remarks</b></td>
                    <td class="course-color"><b>Course</b></td>
                    <td class="course-color"><b>Term</b></td>
                </tr>
            `);

            // Loop through each course and display the data
            course.forEach(dataCourse => {
                let courseCode = dataCourse["course"];
                let description = dataCourse["description"];
                let unit = dataCourse["unit"];
                let grade = dataCourse["grade"];
                let remarks = dataCourse["remarks"];
                let term = dataCourse["term"];


                let remarkClass = "";
                if (remarks === "In Progress") {
                    remarkClass = "course-pending";
                } else if (remarks === null) {
                    remarkClass = "null-remarks";
                } else if (remarks === "Passed") {
                    remarkClass = "course-taken";
                }

                $(".container").append(
                    `<tr class="${remarkClass}">
                        <td >${courseCode}</td>
                        <td>${description}</td>
                        <td>${unit}</td>
                        <td>${grade}</td>
                        <td>${remarks}</td>
                        <td>${courseCode}</td>
                        <td>${term}</td>
                    </tr>
                `);
            });
        });
    });
});