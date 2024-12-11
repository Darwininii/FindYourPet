const Textarea = ({ placeholder, value, onChange }) => {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-2">
      <textarea
        className="bg-slate-700 text-slate-300 h-28 w-full placeholder:text-slate-300 placeholder:opacity-50 border border-slate-600 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-300"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Textarea;
