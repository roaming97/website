<script lang="ts">
	import { svelidate, string } from 'svelidate'

	const form = svelidate({
		email: {
			value: '',
			type: 'email',
			validators: [
				string.required('An e-mail address is required.'),
				string.email('Please enter a valid e-mail address.')
			]
		},
		subject: {
			value: '',
			type: 'text',
			validators: [string.required('A subject is required.')]
		},
		message: {
			value: '',
			type: 'text',
			validators: [string.required('A message is required.')]
		}
	})

	$form.$on.submit = () => {
		console.log('Submitted!')
	}
</script>

<template lang="pug">
	form(bind:this!='{$form.$el}')
		input(type='email', placeholder='Email', bind:this!='{$form.email}')
		input(placeholder='Subject', bind:this!='{$form.subject}')
		input(placeholder='Message', bind:this!='{$form.message}')
		button(type='submit' disabled!='{$form.$st.invalid}') Send
</template>
