import axios from 'axios';

const webhookURL = 'https://webhook.site/74bc4378-be1b-47eb-aef2-392dc1879870';

const services = {
	getFilterOptions: ({filteredOptions, selectedValue, preValue}) => 
		[...filteredOptions, preValue].filter((option) => option.value !== selectedValue.value),

	getSchemaOptions: ({selectedSchema, selectedValue, preValue}) =>
		selectedSchema.map((option) => option.value === preValue.value ? selectedValue : option),

	postApi: (data) => {		
		axios.post(webhookURL, data, {
			headers: {
				'Content-Type': 'application/json',
			},
		});
	}
}

export default services