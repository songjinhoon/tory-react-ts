import { InboxOutlined } from '@ant-design/icons';
import Dragger from 'antd/es/upload/Dragger';
import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Button } from 'antd';

export enum FileUploadType {
  single = 'single',
  multi = 'multi',
  chunk = 'chunk',
}

enum Status {
  init = 'init',
  uploading = 'uploading',
  done = 'done',
}

const Element = () => {
  return (
    <>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Click or drag file to this area to upload
      </p>
      <p className="ant-upload-hint">
        uploading company data or other banned files.
      </p>
    </>
  );
};

const UploadFactory = ({ type }: any) => {
  const [status, setStatus] = useState(Status.init);
  const [fileList, setFileList] = useState<any>([]);

  const customRequest = async (event: any) => {
    setStatus(Status.uploading);
    const { file, onSuccess, onError, onProgress } = event;
    const formData = new FormData();
    formData.append('userId', '94');
    formData.append('name', 'muhan');
    formData.append('partnerType', 'CORPORATION_BUSINESS');
    formData.append('representative', 'kingmoomoo');
    formData.append('multipartFile', file);
    try {
      const response: AxiosResponse = await axios.post(
        '/api/mpp/partner-log/save',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total!,
            );
            console.log(percentCompleted);
            onProgress({ percent: percentCompleted });
          },
        },
      );
      onSuccess(response.data, file);
      setStatus(Status.done);
    } catch (error: any) {
      onError(error);
      console.log('파일 업로드에 실패했습니다.');
    }
  };

  const _onClick = async () => {
    setStatus(Status.uploading);
    const formData = new FormData();
    formData.append('userId', '94');
    formData.append('workingYear', '2022');
    formData.append('unit', '월');
    formData.append('specializations', 'APP');
    formData.append('specializations', 'BANNER');
    formData.append('projectType', 'OUTSIDE_PROJECT');
    formData.append('projectName', 'projectName');
    formData.append('periodType', 'LESS_THAN_THREE_MONTH');
    formData.append('link', 'http://google.com');
    formData.append('description', 'description');
    formData.append('clientName', 'devHoon');
    formData.append('businessTypes', 'AO');
    formData.append('businessTypes', 'BB');
    formData.append('budget', '100');
    fileList.forEach((file: any) => {
      formData.append('multipartFiles', file.originFileObj);
    });

    try {
      const response: AxiosResponse = await axios.post(
        '/api/mpp/portfolio/save',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      console.log(response);
      setFileList([]);
      setStatus(Status.done);
    } catch (error: any) {
      console.log(error);
      console.log('파일 업로드에 실패했습니다.');
    }
  };

  return (
    <>
      {type === FileUploadType.single && (
        <Dragger
          {...getOptionByTypeAndUrl(type)}
          customRequest={customRequest}
          disabled={status === Status.uploading}
        >
          <Element></Element>
        </Dragger>
      )}
      {type === FileUploadType.multi && (
        <>
          <Dragger
            {...getOptionByTypeAndUrl(type)}
            onChange={(info) => {
              setFileList(info.fileList);
            }}
          >
            <Element></Element>
          </Dragger>
          <Button
            type="primary"
            disabled={fileList.length === 0}
            onClick={_onClick}
            style={{
              marginTop: 16,
            }}
          >
            start Upload
          </Button>
        </>
      )}
    </>
  );
};

export default UploadFactory;

function getOptionByTypeAndUrl(type: FileUploadType) {
  const onChange = (info: any) => {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      console.log(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      console.log(`${info.file.name} file upload failed.`);
    }
  };

  const onDrop = (e: any) => {
    console.log('Dropped files', e.dataTransfer.files);
  };

  switch (type) {
    case FileUploadType.single:
      return {
        multiple: false,
        onChange,
        onDrop,
        progress: {
          strokeColor: {
            '0%': '#108ee9',
            '100%': '#87d068',
          },
          format: (percent: any) =>
            percent && `${parseFloat(percent.toFixed(2))}%`,
        },
      };
    case FileUploadType.multi:
      return {
        multiple: true,
        beforeUpload: () => {
          return false;
        },
      };
    case FileUploadType.chunk:
      return {
        multiple: false,
        onChange,
        onDrop,
      };
  }
}
