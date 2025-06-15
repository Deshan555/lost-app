import React from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import apiConfigurations from '../api/api-base';
const { Dragger } = Upload;

const FileUploader = () => {
  const [fileList, setFileList] = React.useState([]);
  const [uploadStatus, setUploadStatus] = React.useState([]);

  const handleChange = (info) => {
    let newFileList = [...info.fileList];
    setFileList(newFileList);

    setUploadStatus(
      newFileList.map(file => {
        // Handle API response with uploaded_files array
        let urls = [];
        if (file.response && file.response.uploaded_files) {
          urls = file.response.uploaded_files;
        } else if (file.response?.url) {
          urls = [file.response.url];
        }
        return {
          name: file.name,
          status: file.status,
          urls,
        };
      })
    );

    const { status } = info.file;
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const props = {
    name: 'files',
    multiple: true,
    action: apiConfigurations.BASE_URL + 'images/upload',
    onChange: handleChange,
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
    fileList,
  };

  return (
    <div>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="font-geist-sans text-xs">Click or drag file to this area to upload</p>
        <p className="mt-3 font-geist-sans text-sm text-gray-600">
          Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files.
        </p>
      </Dragger>
      <div className="mt-4">
        <h4 className="font-bold mb-2">Upload Status</h4>
        <ul>
          {uploadStatus.map((file, idx) => (
            <li key={idx} className="mb-1 text-xs">
              <span className="font-semibold">{file.name}</span> - 
              <span className="ml-1">{file.status}</span>
              {file.urls && file.urls.length > 0 && (
                <div className="ml-2 flex flex-wrap gap-2">
                  {file.urls.map((url, i) => (
                    <a
                      key={i}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 break-all underline"
                    >
                      {url}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FileUploader;