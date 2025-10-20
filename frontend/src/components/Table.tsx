import React from 'react';
import { Attendance } from '../types/attendance';

interface TableProps {
	data: Attendance[];
	onEdit?: (id: number) => void;
}

function Table({ data, onEdit }: TableProps) {
	const formatTime = (time: string | null): string => {
		if (!time) return '-';
		return time.substring(0, 5);
	};

	return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-3 text-left font-semibold">日付</th>
            <th className="px-4 py-3 text-left font-semibold">出勤</th>
            <th className="px-4 py-3 text-left font-semibold">退勤</th>
            <th className="px-4 py-3 text-left font-semibold">勤務時間</th>
            {onEdit && <th className="px-4 py-3 text-left font-semibold">操作</th>}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={onEdit ? 5 : 4} className="px-4 py-8 text-center text-gray-500">
                勤怠データがありません
              </td>
            </tr>
          ) : (
            data.map((attendance) => (
              <tr key={attendance.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3">{attendance.date}</td>
                <td className="px-4 py-3">{formatTime(attendance.clockIn)}</td>
                <td className="px-4 py-3">{formatTime(attendance.clockOut)}</td>
                <td className="px-4 py-3">
                  {attendance.workHours ? `${attendance.workHours}時間` : '-'}
                </td>
                {onEdit && (
                  <td className="px-4 py-3">
                    <button
                      onClick={() => onEdit(attendance.id)}
                      className="text-blue-500 hover:text-blue-700 font-medium"
                    >
                      編集
                    </button>
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
