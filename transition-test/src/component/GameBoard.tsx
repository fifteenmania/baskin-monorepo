function TestBox() {
  return <div className="w-10 h-10 bg-gray-900 opacity-80">
    10
  </div>
}

function Stack() {
  const maxLen = 8;
  return <div className="flex flex-col">
    {Array.from({length: maxLen}).map((_, idx) => <TestBox key={idx}/>)}
  </div>
}

export default function GameBoard() {
  const numBox = 10;
  return <div>
    <Stack />
  </div>
}
