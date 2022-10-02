const NoteNotFound = () => {
  return (
    <div className="my-10 p-3 bg-white rounded-lg border border-gray-200 items-center shadow-md hover:bg-gray-100 h-fit grid gap-2">
      <div>
        <h6 className="text-2xl font-bold text-center text-gray-800 ">
          <span className="text-red-500">Oops!</span> Tidak ada catatan!
        </h6>
      </div>
    </div>
  );
};

export default NoteNotFound;
