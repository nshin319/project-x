import React from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Table from './components/Table';
import { Attendance } from './types/attendance';

function App() {
  // ダミーデータ
  const dummyData: Attendance[] = [
    {
      id: 1,
      date: '2025-10-01',
      clockIn: '09:00:00',
      clockOut: '18:00:00',
      breakStart: null,
      breakEnd: null,
      workHours: 8
    },
    {
      id: 2,
      date: '2025-10-02',
      clockIn: '09:15:00',
      clockOut: '18:30:00',
      breakStart: null,
      breakEnd: null,
      workHours: 8.25
    }
  ];

  const handleClick = () => {
    alert('ボタンが押されました！');
  };

  const handleEdit = (id: number) => {
    alert(`ID ${id} を編集`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          コンポーネント動作確認
        </h1>

        {/* Button コンポーネントのテスト */}
        <Card title="Buttonコンポーネント">
          <div className="flex gap-4">
            <Button color="blue" onClick={handleClick}>
              青いボタン
            </Button>
            <Button color="red" onClick={handleClick}>
              赤いボタン
            </Button>
            <Button color="gray" onClick={handleClick}>
              グレーのボタン
            </Button>
            <Button color="blue" onClick={handleClick} disabled>
              無効なボタン
            </Button>
          </div>
        </Card>

        {/* Table コンポーネントのテスト */}
        <Card title="Tableコンポーネント">
          <Table data={dummyData} onEdit={handleEdit} />
        </Card>

        {/* 空のテーブル */}
        <Card title="空のテーブル">
          <Table data={[]} />
        </Card>
      </div>
    </div>
  );
}

export default App;
