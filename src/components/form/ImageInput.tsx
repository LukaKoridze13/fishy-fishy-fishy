import React, { useState } from "react";
import FlexBox from "../frames/FlexBox";

interface Props {
  text: string;
  error: string | undefined;
}

const ImageInput = ({ text, error }: Props) => {
  const [fileInfo, setFileInfo] = useState<{ name: string; size: number } | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileInfo({ name: file.name, size: file.size });
    }
  };

  return (
    <div>
      <FlexBox>
        <label className="bg-white cursor-pointer bg-opacity-10 rounded-md p-2" htmlFor="file">
          {text}
        </label>
        <input type="file" hidden id="file" onChange={handleFileChange} />
        {fileInfo && (
          <div className="mt-2">
            <p>
              {fileInfo.name} / {(fileInfo.size / 1024000).toFixed(2)} MB
            </p>
          </div>
        )}
      </FlexBox>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default ImageInput;
