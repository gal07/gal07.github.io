	/*  Wizard */
	jQuery(function ($) {
		// Chose here which method to send the email, available:
		// Simple phpmail text/plain > review_send.php (default)
		// Phpmaimer text/html > phpmailer/review_phpmailer.php
		// Phpmaimer text/html SMPT > phpmailer/review_phpmailer_smtp.php
		// PHPmailer with html template > phpmailer/review_phpmailer_template.php
		// PHPmailer with html template SMTP> phpmailer/review_phpmailer_template_smtp.php
		$('form#wrapped').attr('action', 'review_send.php');
		$("#wizard_container").wizard({
			stepsWrapper: "#wrapped",
			submit: ".submit",
			beforeSelect: function (event, state) {
				if ($('input#website').val().length != 0) {
					return false;
				}
				if (!state.isMovingForward)
					return true;
				var inputs = $(this).wizard('state').step.find(':input');
				return !inputs.length || !!inputs.valid();
			}
		}).validate({
			errorPlacement: function (error, element) {
				if (element.is(':radio') || element.is(':checkbox')) {
					error.insertBefore(element.next());
				} else {
					error.insertAfter(element);
				}
			}
		});
		//  progress bar
		$("#progressbar").progressbar();
		$("#wizard_container").wizard({
			afterSelect: function (event, state) {
				$("#progressbar").progressbar("value", state.percentComplete);
				$("#location").text("(" + state.stepsComplete + "/" + state.stepsPossible + ")");
			}
		});
		/* Submit loader mask */
		$('form').on('submit',function() {
			var form = $("form#wrapped");
			form.validate();
			if (form.valid()) {
				$("#loader_form").fadeIn();
			}
		});
	});