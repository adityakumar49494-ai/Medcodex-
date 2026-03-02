// MARK LESSON COMPLETE
function completeLesson(lessonName) {
    localStorage.setItem(lessonName, "done");
    alert("Lesson marked as complete!");
}

// CHECK PROGRESS (Dashboard)
function checkProgress() {
    let lessons = ["lesson1", "lesson2", "lesson3"];
    let completed = 0;

    lessons.forEach(function(lesson) {
        if (localStorage.getItem(lesson) === "done") {
            completed++;
        }
    });

    let percentage = (completed / lessons.length) * 100;

    let progressBar = document.getElementById("progress-bar");
    if (progressBar) {
        progressBar.style.width = percentage + "%";
        progressBar.innerText = percentage + "%";
    }

    // Unlock certificate if complete
    if (percentage === 100) {
        let certBtn = document.getElementById("certificateBtn");
        if (certBtn) {
            certBtn.style.display = "inline-block";
        }
    }
}

// RUN ON PAGE LOAD
window.onload = function() {
    checkProgress();
};
