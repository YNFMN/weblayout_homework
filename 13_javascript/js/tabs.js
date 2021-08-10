document.addEventListener('DOMContentLoaded', function() {
	document.querySelectorAll('.tab-button').forEach(function(tabButton) {
		tabButton.addEventListener('click', function(event) {
			const path = event.currentTarget.dataset.path

			document.querySelectorAll('.tab-text').forEach(function(tabText) {
				tabText.classList.remove('tab-text-active')
			})
			document.querySelector(`[data-target="${path}"]`).classList.add('tab-text-active')
		})
	})
})
