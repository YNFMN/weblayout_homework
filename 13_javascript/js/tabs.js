document.addEventListener('DOMContentLoaded', function() {
	document.querySelectorAll('.work__steps').forEach(function(workSteps) {
		workSteps.addEventListener('click', function(event) {
			const path = event.currentTarget.dataset.path

			document.querySelectorAll('.work__article').forEach(function(workArticle) {
				workArticle.classList.remove('work__article-active')
			})
			document.querySelector(`[data-target="${path}"]`).classList.add('work__article-active')
		})
	})
})
