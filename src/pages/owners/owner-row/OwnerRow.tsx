import React from 'react';
import EditIcon from "../../../assetts/edit.png";
import DeleteIcon from "../../../assetts/delete.png";
import {OwnersInList} from "../../../types/owners";

import "./style.scss"

interface IOwnerRow {
  owner: OwnersInList;
  idx: number;
}

const OwnerRow: React.FC<IOwnerRow> = ({ owner, idx }) => {
  return (
    <div className='container ownerRowContainer'>
      <div className='row ownerRow'>
        <div className='col-xxl-1 col-xl-1 col-lg-1 col-md-1 rowElement'>
          {idx}
        </div>
        <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 rowElement'>
          {owner.owner}
        </div>
        <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 rowElement'>
          {owner.legal_address}
        </div>
        <div className='col-xxl-3 col-xl-3 col-lg-3 col-md-3 rowElement'>
          {owner.inn}
        </div>
        <div className='col-xxl-2 col-xl-2 col-lg-2 col-md-2 rowElement actions'>
          <img src={EditIcon} alt='Edit Icon' />
          <img src={DeleteIcon} alt='Delete Icon' />
        </div>
      </div>
    </div>
  );
};

export default OwnerRow;