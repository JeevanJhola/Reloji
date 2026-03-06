export default function ImageUpload({ preview, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">Product Image</label>

      <div className="border-2 border-dashed rounded-xl p-4 text-center">
        <input
          type="file"
          accept="image/*"
          hidden
          id="imageUpload"
          onChange={(e) => onChange(e.target.files[0])}
        />
        <label htmlFor="imageUpload" className="cursor-pointer">
          {preview ? (
            <img src={preview} className="mx-auto h-40 object-contain" />
          ) : (
            <p className="text-gray-500">Click to upload image</p>
          )}
        </label>
      </div>
    </div>
  );
}

