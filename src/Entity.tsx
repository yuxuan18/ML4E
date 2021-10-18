import React from 'react';
import './Entity.css';
import { Modal } from 'antd'
import { BarsOutlined, EditTwoTone } from '@ant-design/icons';

interface Props {
  entity: any;
}

interface State {
  modalVisible: boolean;
}
export default class Entity extends React.PureComponent<Props, State> {
  constructor(props:Props) {
    super(props);
    this.state = {
      modalVisible:false,

    }
  }
  handleClick = () => {
    this.setState((preState) => {
      return {
        ...preState,
        modalVisible:!preState.modalVisible
      }
    })
  }
  render() {
    const { entity } = this.props;
    const { modalVisible } = this.state;
    const getCls = () => {
      if (entity.entityType === 'FACT') {
        return 'fact';
      } else if (entity.entityType === 'DIM') {
        return 'dim';
      } else {
        return 'other';
      }
    };
    return (
      <div className={`entity-container ${getCls()}`}>
        <div className={`content ${getCls()}`}>
          <div className="head">
            <div>
              <BarsOutlined className="type" />
              <span>{entity?.name}</span>
            </div>
            <EditTwoTone className="more" onClick={this.handleClick} />
          </div>
          <div className="body">
            {entity.properties.map((property: any) => {
              console.log('11:', property.isPK);
              return (
                <div className="body-item" key={property.propertyId}>
                  <div className="name">
                    {property?.isPK && <span className="pk">PK</span>}
                    {property?.isFK && <span className="fk">FK</span>}
                    {property.name}
                  </div>
                  <div className="type">{property.propertyType}</div>
                </div>
              );
            })}
          </div>
        </div>
        <Modal visible={modalVisible} onCancel={this.handleClick} onOk={this.handleClick} >
            {entity.properties.map((property: any) => {
              console.log('11:', property.isPK);
              return (
                <div className="body-item" key={property.propertyId}>
                  <div className="name">
                    {property?.isPK && <span className="pk">PK</span>}
                    {property?.isFK && <span className="fk">FK</span>}
                    {property.name}
                  </div>
                  <div className="type">{property.propertyType}</div>
                </div>
              );
            })}
        </Modal>
      </div>
    );
  }
}
