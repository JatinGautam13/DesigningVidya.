"use client";

import { useState } from "react";
import ApplyNowForm from "@/components/layers/ApplyNowForm";

export default function EnrollNowButton({ courseTitle, className, children = "Enroll Now" }) {
	const [open, setOpen] = useState(false);
	const [instanceKey, setInstanceKey] = useState(0);

	const handleOpen = () => {
		setInstanceKey((k) => k + 1);
		setOpen(true);
	};

	return (
		<>
			<button type="button" className={className} onClick={handleOpen}>
				{children}
			</button>
			<ApplyNowForm
				key={instanceKey}
				show={open}
				onClose={() => setOpen(false)}
				defaultCourse={courseTitle}
			/>
		</>
	);
}