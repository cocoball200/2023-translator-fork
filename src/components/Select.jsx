const Select = ({ options, value, onChange }) => {
  const handleSourceLangChange = (e) => {};
  return (
    <select onChange={handleSourceLangChange} value={sourceLang}>
      <option value="en">English</option>
      <option value="ko">Korean</option>
    </select>
  );
};
