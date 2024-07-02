export type InquiryData = {
	date: string;
	問題数: number;
	正解数: number;
	正解率: number;
};

export type RechartsDotPayload = {
	cursor: string;
	cx: number;
	cy: number;
	dataKey: string;
	fill: string;
	index: number;
	r: number;
	stroke: string;
	strokeWidth: number;
	value: number;
	payload: InquiryData;
};