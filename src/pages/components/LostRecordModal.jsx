import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Select, DatePicker, Upload, Button, message, Steps, Row, Col, Badge } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';

import MapComponent from './MapComponent';
import FileUploader from './FileUploader';

import laptopData from '../data/laptops.json';
import phoneData from '../data/mobile.json';
import LocationData from '../data/locations.json'; // Assuming you have a locations data file

const { Option } = Select;
const { Step } = Steps;

const LostRecordModal = ({ visible, onCancel, token }) => {
  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(0);
  const [itemType, setItemType] = useState('ELECTRONICS');
  const [electronics, setElectronics] = useState({
    item_type: 'PHONE',
    brand: null,
    model: null,
  });
  const [locations, setLocations] = useState({
    name: 'Sri Lanka',
    latitude: 7.8731,
    longitude: 80.7718,
  });
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [mapCenter, setMapCenter] = useState({ lat: 7.8731, lng: 80.7718 }); // Default: Sri Lanka
  const [fileList, setFileList] = useState([]);

  // const [requestJson, setRequestJson] = useState({
  //   user_id: 
  //   item_type: 'ELECTRONICS',
  //   description: '',
  //   date_lost: null,
  //   location_lost: '',
  //   remarks: '',
  //   reward: 0,
  //   status: 'LOST',
  //   sub_record: {
      
  //   },
  // });

  const uploadFileList = []

  useEffect(() => {

  }, []);

  const handleItemTypeChange = (value) => {
    setItemType(value);
    form.resetFields(['sub_record']);
  };

  const handleLocationChange = (value) => {
    const location = locations.find((loc) => loc.id === value);
    setSelectedLocation(location);
    if (location) {
      setMapCenter({ lat: location.lat, lng: location.lng });
    }
  };

  const handleUploadChange = ({ fileList: newFileList }) => {
    console.log(fileList);
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const mobilePhoneColors = [
    "Black",
    "White",
    "Silver",
    "Gold",
    "Blue",
    "Red",
    "Green",
    "Purple",
    "Pink",
    "Gray",
    "Yellow",
    "Orange",
    "Brown",
    "Rose Gold",
    "Champagne",
    "Space Gray",
    "Midnight Green",
    "Sierra Blue",
    "Graphite",
    "Starlight",
    "Deep Purple",
    "Alpine Green",
    "Cobalt Blue",
    "Coral",
    "Mint Green",
    "Lavender",
    "Sky Blue",
    "Light Pink",
    "Unknown Color",
  ];

  const onFinish = async (values) => {

    console.log('Form values:', values);

    const formData = new FormData();
    const subRecord = values.sub_record || {};

    // Construct the payload based on item_type
    const payload = {
      user_id: 1, // Replace with actual user ID from context or props
      item_type: itemType,
      description: values.description,
      date_lost: values.date_lost ? values.date_lost.format('YYYY-MM-DD') : null,
      location_lost: selectedLocation ? selectedLocation.name : values.location_lost,
      remarks: values.remarks,
      reward: values.reward,
      status: 'LOST',
      sub_record: subRecord,
    };

    console.log(payload);
    // // Append JSON payload
    // formData.append('record', JSON.stringify(payload));

    // // Append images
    // fileList.forEach((file, index) => {
    //   if (file.originFileObj) {
    //     formData.append(`image_url${index + 1}`, file.originFileObj);
    //   }
    // });

    // try {
    //   const response = await axios.post('http://127.0.0.1:8000/lost-records/new/lost-records', formData, {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   });
    //   message.success('Lost record created successfully!');
    //   form.resetFields();
    //   setFileList([]);
    //   setCurrentStep(0);
    //   onCancel();
    // } catch (error) {
    //   message.error('Error creating lost record: ' + (error.response?.data?.detail || error.message));
    // }
  };

  const renderSubRecordFields = () => {
    switch (itemType) {
      case 'ELECTRONICS':
        return (
          <div className="font-geist-sans mt-3">
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name={['sub_record', 'item_type']}
                  label={<span className="font-geist-sans text-xs">Electronic Item Type</span>}
                  initialValue="OTHERS"
                >
                  <Select
                    bordered={false}
                    className="custom-Select"
                    onChange={(value) => setElectronics({ ...electronics, item_type: value })}
                    style={{ width: '98%', height: '38px', borderRadius: 10 }}
                  >
                    <Option value="PHONE"><span className="font-geist-sans text-xs">Phone</span></Option>
                    <Option value="LAPTOP"><span className="font-geist-sans text-xs">Laptop</span></Option>
                    <Option value="OTHERS"><span className="font-geist-sans text-xs">Others</span></Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name={['sub_record', 'brand']} label={<span className="font-geist-sans text-xs">Brand</span>}>
                  {electronics.item_type === 'PHONE' && (
                    <Select className="custom-Select" style={{ width: '98%', height: '38px', borderRadius: 10 }} bordered={false} onChange={(value) => setElectronics({ ...electronics, brand: value })}>
                      {[...new Set(phoneData.map((phone) => phone.brand))].map((brand) => (
                        <Option key={brand} value={brand}>
                          <span className="font-geist-sans text-xs">{brand}</span>
                        </Option>
                      ))}
                    </Select>
                  )}
                  {electronics.item_type === 'LAPTOP' && (
                    <Select className="custom-Select" style={{ width: '98%', height: '38px', borderRadius: 10 }} bordered={false} onChange={(value) => setElectronics({ ...electronics, brand: value })}>
                      {[...new Set(laptopData.map((laptop) => laptop.brand))].map((brand) => (
                        <Option key={brand} value={brand}>
                          <span className="font-geist-sans text-xs">{brand}</span>
                        </Option>
                      ))}
                    </Select>
                  )}
                  {electronics.item_type === 'OTHERS' && (
                    <Input style={{ width: '98%', height: '38px', borderRadius: 10 }} className="font-geist-sans height-10 rounded-full" />
                  )}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name={['sub_record', 'model']} label={<span className="font-geist-sans text-xs">Model</span>}>
                  {
                    electronics.item_type === 'PHONE' && (
                      <Select className="custom-Select" style={{ width: '98%', height: '38px', borderRadius: 10 }} bordered={false}>
                        {phoneData
                          .filter((phone) => phone.brand === electronics.brand)
                          .map((phone) => (
                            <Option key={phone.model} value={phone.model}>
                              <span className="font-geist-sans text-xs">{phone.model}</span>
                            </Option>
                          ))}
                      </Select>
                    )
                  }
                  {
                    electronics.item_type === 'LAPTOP' && (
                      <Select className="custom-Select" style={{ width: '98%', height: '38px', borderRadius: 10 }} bordered={false}>
                        {laptopData
                          .filter((laptop) => laptop.brand === electronics.brand)
                          .map((laptop) => (
                            <Option key={laptop.model} value={laptop.model}>
                              <span className="font-geist-sans text-xs">{laptop.model}</span>
                            </Option>
                          ))}
                      </Select>
                    )
                  }
                  {
                    electronics.item_type === 'OTHERS' && (
                      <Input style={{ width: '98%', height: '38px', borderRadius: 10 }} className="font-geist-sans height-10 rounded-full" />
                    )
                  }
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name={['sub_record', 'serial_number']} label={<span className="font-geist-sans text-xs">Serial Number</span>}>
                  <Input className='custom-Input' style={{ width: '98%', height: '38px', borderRadius: 10 }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name={['sub_record', 'color']} label={<span className="font-geist-sans text-xs">Color</span>}>
                  <Select className="custom-Select" style={{ width: '98%', height: '38px', borderRadius: 10 }} bordered={false}>
                    {
                      mobilePhoneColors.map((color) => (
                        <Option key={color} value={color}>
                          <span className="font-geist-sans text-xs">{color} <Badge color={color.toLowerCase()} style={{ marginLeft: 5 }} /></span>
                        </Option>
                      ))
                    }
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name={['sub_record', 'description']} label={<span className="font-geist-sans text-xs">Any Remarks</span>}>
                  <Input.TextArea className='custom-Input' style={{ width: '98%', borderRadius: 10, height: 38 }} rows={1} />
                </Form.Item>
              </Col>
            </Row>
          </div>
        );
      case 'JEWELRY':
        return (
          <div className="font-geist-sans mt-3 w-[650px]">
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item name={['sub_record', 'jewelry_type']} label={<span className='font-geist-sans text-xs'>Jewelry Type</span>}>
                  <Select className="custom-Select" style={{ width: '98%', height: '38px', borderRadius: 10 }} bordered={false}>
                    {
                      ['RING', 'NECKLACE', 'BRACELET', 'EARRINGS', 'WATCH', 'OTHER'].map((type) => (
                        <Option key={type} value={type}>
                          <span className='font-geist-sans text-xs'>{type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()}</span>
                        </Option>
                      ))
                    }
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name={['sub_record', 'brand']} label={<span className='font-geist-sans text-xs'>Brand</span>}>
                  <Input className='custom-Input' style={{ width: '98%', height: '38px', borderRadius: 10 }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name={['sub_record', 'model']} label={<span className='font-geist-sans text-xs'>Model</span>}>
                  <Input className='custom-Input' style={{ width: '98%', height: '38px', borderRadius: 10 }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name={['sub_record', 'color']} label={<span className='font-geist-sans text-xs'>Color</span>}>
                  <Select className="custom-Select" style={{ width: '98%', height: '38px', borderRadius: 10 }} bordered={false}>
                    {
                      ['Gold', 'Silver', 'Platinum', 'Rose Gold', 'White Gold', 'Yellow Gold', 'Black', 'Blue', 'Red', 'Green', 'Purple', 'Pink', 'Gray', 'Unknown Color'].map((color) => (
                        <Select.Option key={color} value={color}>
                          <span className='font-geist-sans text-xs'>{color}</span>
                        </Select.Option>
                      ))
                    }
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name={['sub_record', 'material']} label={<span className='font-geist-sans text-xs'>Material</span>}>
                  <Select className="custom-Select" style={{ width: '98%', height: '38px', borderRadius: 10 }} bordered={false}>
                    {
                      ['Gold', 'Silver', 'Platinum', 'Diamond', 'Other'].map((material) => (
                        <Option key={material} value={material}>
                          <span className='font-geist-sans text-xs'>{material}</span>
                        </Option>
                      ))
                    }
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name={['sub_record', 'weight']} label={<span className='font-geist-sans text-xs'>Weight (grams)</span>}>
                  <Input type="number" className='custom-Input' style={{ width: '98%', height: '38px', borderRadius: 10 }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name={['sub_record', 'description']} label={<span className='font-geist-sans text-xs'>Description</span>}>
                  <Input.TextArea className='custom-Input' style={{ width: '98%', borderRadius: 10 }} rows={2} />
                </Form.Item>
              </Col>
            </Row>
          </div>
        );
      case 'DOCUMENT':
        return (
          <div className="font-geist-sans mt-3 w-[650px]">
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item name={['sub_record', 'document_type']} label={<span className='font-geist-sans text-xs'>Document Type</span>} initialValue="ID_CARD">
                  <Select className="custom-Select" style={{ width: '98%', height: '38px', borderRadius: 10 }} bordered={false}>
                    {
                      ['ID_CARD', 'PASSPORT', 'LICENSE', 'CERTIFICATE', 'OTHER'].map((type) => (
                        <Option key={type} value={type}>
                          <span className='font-geist-sans text-xs'>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
                        </Option>
                      ))
                    }
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name={['sub_record', 'issuing_authority']} label={<span className='font-geist-sans text-xs'>Issuing Authority</span>}>
                  <Input className='custom-Input' style={{ width: '98%', height: '38px', borderRadius: 10 }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name={['sub_record', 'document_number']} label={<span className='font-geist-sans text-xs'>Document Number</span>}>
                  <Input className='custom-Input' style={{ width: '98%', height: '38px', borderRadius: 10 }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name={['sub_record', 'owner_name']} label={<span className='font-geist-sans text-xs'>Owner Name</span>}>
                  <Input className='custom-Input' style={{ width: '98%', height: '38px', borderRadius: 10 }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name={['sub_record', 'description']} label={<span className='font-geist-sans text-xs'>Description</span>}>
                  <Input.TextArea className='custom-Input' style={{ width: '98%', borderRadius: 10 }} rows={2} />
                </Form.Item>
              </Col>
            </Row>
          </div>
        );
      case 'WALLET':
        return (
          <div className="font-geist-sans mt-3 w-[650px]">
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item name={['sub_record', 'item_type']} label={<span className="font-geist-sans text-xs">Item Type</span>} initialValue="WALLET">
                  <Select className="custom-Select" style={{ width: '98%', height: '38px', borderRadius: 10 }} bordered={false}>
                    {
                      ['WALLET', 'BAG', 'OTHER'].map((type) => (
                        <Option key={type} value={type}>
                          <span className="font-geist-sans text-xs">{type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()}</span>
                        </Option>
                      ))
                    }
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name={['sub_record', 'brand']} label={<span className="font-geist-sans text-xs">Brand</span>}>
                  <Input className="custom-Input" style={{ width: '98%', height: '38px', borderRadius: 10 }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name={['sub_record', 'color']} label={<span className="font-geist-sans text-xs">Color</span>}>
                  <Input className="custom-Input" style={{ width: '98%', height: '38px', borderRadius: 10 }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name={['sub_record', 'material']} label={<span className="font-geist-sans text-xs">Material</span>}>
                  <Input className="custom-Input" style={{ width: '98%', height: '38px', borderRadius: 10 }} />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item name={['sub_record', 'description']} label={<span className="font-geist-sans text-xs">Description</span>}>
                  <Input.TextArea className="custom-Input" style={{ width: '98%', borderRadius: 10 }} rows={2} />
                </Form.Item>
              </Col>
            </Row>
          </div>
        );
      default:
        return (
          <div className="font-geist-sans mt-3 w-[650px]">
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item name={['sub_record', 'item_type']} label={<span className="font-geist-sans text-xs">Item Type</span>} initialValue="OTHER">
                  <Input className="custom-Input" style={{ width: '98%', height: '38px', borderRadius: 10 }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name={['sub_record', 'brand']} label={<span className="font-geist-sans text-xs">Brand</span>}>
                  <Input className="custom-Input" style={{ width: '98%', height: '38px', borderRadius: 10 }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name={['sub_record', 'color']} label={<span className="font-geist-sans text-xs">Color</span>}>
                  <Input className="custom-Input" style={{ width: '98%', height: '38px', borderRadius: 10 }} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name={['sub_record', 'material']} label={<span className="font-geist-sans text-xs">Material</span>}>
                  <Input className="custom-Input" style={{ width: '98%', height: '38px', borderRadius: 10 }} />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item name={['sub_record', 'description']} label={<span className="font-geist-sans text-xs">Item Description</span>}>
                  <Input.TextArea className="custom-Input" style={{ width: '98%', borderRadius: 10 }} rows={2} />
                </Form.Item>
              </Col>
            </Row>
          </div>
        );
    }
  };

  const steps = [
    {
      title: 'Item Details',
    },
    {
      title: 'Location & Date',
    },
    {
      title: 'Images & Remarks',
    },
    {
      title: 'Review & Submit',
    }
  ];

  const next = () => {
    form.validateFields().then(() => {
      setCurrentStep(currentStep + 1);
    });
  };

  const prev = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="flex h-screen">
      <div className="w-2/2 bg-white-100 mb-6">
        <div className="sticky top-0 z-10 bg-white pb-8">
          <h2 className="font-geist-sans text-2xl font-bold mb-4 text-black">Lost Record Form</h2>
          <Steps
            current={currentStep}
            size='small'
            progressDot={(dot, { status }) => (
              <span className={`font-geist-sans text-xs ${status === 'finish' ? 'text-green-500' : 'text-gray-500'}`}>
                {dot}
              </span>
            )}
          >
            {steps.map((item) => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
        </div>
        <Form form={form} onFinish={onFinish} layout="vertical">
          {
            (currentStep === 0 || currentStep === 3) && (
              <div className="font-geist-sans mt-3 w-[650px]">
                <Form.Item name="item_type" label={<span className="font-geist-sans text-xs">Lost Item Type</span>}
                  initialValue="ELECTRONICS">
                  <Select onChange={handleItemTypeChange} className="custom-Select" bordered={false} style={{ width: '100%', height: '38px', borderRadius: 10 }}>
                    <Option value="ELECTRONICS"><span className="font-geist-sans text-xs">Electronics</span></Option>
                    <Option value="JEWELRY"><span className="font-geist-sans text-xs">Jewelry</span></Option>
                    <Option value="DOCUMENT"><span className="font-geist-sans text-xs">Document</span></Option>
                    <Option value="WALLET"><span className="font-geist-sans text-xs">Wallet</span></Option>
                    <Option value="OTHER"><span className="font-geist-sans text-xs">Other</span></Option>
                  </Select>
                </Form.Item>
                {renderSubRecordFields()}
                <Form.Item name="description" label={<span className="font-geist-sans text-xs">Description</span>}>
                  <Input.TextArea className='custom-Input' style={{ width: '98%', borderRadius: 10, height: 38 }} rows={2} />
                </Form.Item>
              </div>
            )
          }
          {
            (currentStep === 1 || currentStep === 3) && (
              <div className="font-geist-sans mt-3 w-[650px]">
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item name="date_lost" label={<span className="font-geist-sans text-xs">Date Lost</span>}>
                      <DatePicker className="custom-DatePicker"
                        style={{ width: '98%', height: '38px', borderRadius: 10 }} bordered={true}
                        format="YYYY-MM-DD" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
<Form.Item name="location_lost" label={<span className="font-geist-sans text-xs">Location Lost</span>}>
                <Select onChange={(value) => {
                  const location = LocationData.find((loc) => loc.city === value);
                  if (location) {
                    setLocations({
                      name: location.city,
                      latitude: location.latitude,
                      longitude: location.longitude,
                    });
                    setMapCenter({ lat: location.latitude, lng: location.longitude });
                  }
                }}
                  className="custom-Select" bordered={false} style={{ width: '100%', height: '38px', borderRadius: 10 }}>
                  {LocationData.map((loc) => (
                    <Option key={loc.city} value={loc.city}>
                      <span className="font-geist-sans text-xs">{loc.city}</span>
                    </Option>
                  ))}
                </Select>
              </Form.Item>
                  </Col>
                </Row>
                <div className="mb-4 rounded-2xl" style={{ height: '300px', width: '100%', borderRadius: '10px', overflow: 'hidden' }}>
                  <MapComponent lat={mapCenter.lat} lng={mapCenter.lng} />
                </div>
              </div>
            )
          }

          {
            (currentStep === 2 || currentStep === 3) && (
              <div className="font-geist-sans mt-3 w-[650px]">
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item name="remarks" label={<span className="font-geist-sans text-xs">Remarks (If Any)</span>}>
                      <Input.TextArea className='custom-Input' style={{ width: '98%', borderRadius: 10, height: 38 }} rows={2} />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item name="reward" label={<span className="font-geist-sans text-xs">Reward (If Any)</span>}>
                      <Input className='custom-Input' style={{ width: '98%', borderRadius: 10, height: 38 }} />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name="image_urls"
                      label={<span className="font-geist-sans text-xs">Upload Images Of Lost Item</span>}
                      valuePropName="fileList"
                    >
                      <FileUploader />
                    </Form.Item>
                  </Col>
                </Row>
              </div>
            )
          }


          <div className="flex justify-end space-x-2 mt-4">
            {currentStep > 0 && (
              <Button onClick={prev}
                className='previous-button'
              ><span className='font-geist-sans text-xs'>Previous</span></Button>
            )}
            {currentStep < steps.length - 1 && (
              <Button className='primery-button' onClick={next}>
                <span className="font-geist-sans text-xs">Next</span>
              </Button>
            )}
            {currentStep === steps.length - 1 && (
              <>
                <Button className='cancle-button' onClick={onCancel}>
                  <span className="font-geist-sans text-xs">Cancel</span>
                </Button>
                <Button className='primery-button' type="primary" htmlType="submit">
                  <span className="font-geist-sans text-xs">Submit</span>
                </Button>
              </>
            )}
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LostRecordModal;