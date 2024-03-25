import React from 'react';
import { ModalWindow } from './components/ModalWindow/ModalWindow';
import { withLayout } from './Layouts/Layout';

const Panda = () => {
  return (
    <div>
      Main Page Panda
      {/*<ModalWindow visible={true}>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos ex excepturi expedita ipsum molestias nesciunt
          quae quam quibusdam similique tempore! Asperiores est expedita minus modi quaerat quia sunt tempore vitae?
        </div>
      </ModalWindow>*/}
    </div>
  );
};

export default withLayout(Panda);
