// data of attendandce
export interface Attendance {
	id: number;
	date: string;
	clockIn: string | null;
	clockOut: string | null;
	breakStart: string | null;
	breakEnd: string | null;
	workHours: number | null;
}

// response of time stamp
export interface ClockResponse {
	success: boolean;
	message: string;
	clockInTime?: string;
	clockOutTime?: string;
}

// responses of the attendance list
export interface AttendanceLinstResponse {
	success: boolean;
	attendances: Attendance[];
}

// response of the error
export interface ErrorResponse {
	success: false;
	error: string;
	errorCode?: string;
}

// type of the page
export  type PageType = 'clock' | 'list' | 'edit';
