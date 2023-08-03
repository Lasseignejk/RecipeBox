import { useState } from "react";

interface TextareaProps {
	rowsVariable: number[];
	rowsStateFunction: (array: number[]) => void;
}

interface StepsState {
	step: number;
	instruction: string;
}

interface Event {
	target: HTMLTextAreaElement;
}

const Textarea = ({ rowsVariable, rowsStateFunction }: TextareaProps) => {
	const [steps, setSteps] = useState<StepsState[]>([
		{
			step: 1,
			instruction: "",
		},
	]);
	const handleAreaChange = (e: Event, index: number) => {
		const { name, value } = e.target;
		const updatedSteps = [...steps];
		updatedSteps[index] = {
			...updatedSteps[index],
			[name]: value,
			step: index + 1,
		};
		setSteps(updatedSteps);
	};

	const handleAddRow = () => {
		setSteps([
			...steps,
			{
				step: steps.length + 1,
				instruction: "",
			},
		]);
		rowsStateFunction([...rowsVariable, rowsVariable.length + 1]);
	};
	return (
		<>
			{rowsVariable.map((row, index) => (
				<div>
					<label htmlFor={"step" + row}>Step {row}</label>
					<textarea
						name="instruction"
						id={"step" + row}
						cols={35}
						rows={1}
						onChange={(e) => handleAreaChange(e, index)}></textarea>
				</div>
			))}
			<button type="button" onClick={handleAddRow}>
				Add Step
			</button>
		</>
	);
};

export default Textarea;
