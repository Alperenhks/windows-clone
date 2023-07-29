import React, { useState } from 'react';
import "../style/desktop.css";
import Google from '../../google/partials/google';
import Pc from '../../pc/partials/pc';
import CustomModal from '../../shared/modal/CustomModal';
import PcDetail from '../../pc/partials/pcDetail';
import BottomBar from '../../bottom-bar/partials/BottomBar';

function Desktop() {
  const [isGoogleModalVisible, setIsGoogleModalVisible] = useState(false);
  const [isPcModalVisible, setIsPcModalVisible] = useState(false);

  const showGoogleModal = () => {
    setIsGoogleModalVisible(true);
  };

  const closeGoogleModal = () => {
    setIsGoogleModalVisible(false);
  };

  const showPcModal = () => {
    setIsPcModalVisible(true);
  };

  const closePcModal = () => {
    setIsPcModalVisible(false);
  };

  return (
    <div className='desktop-container'>
      <div className='desktop-items'>
        {/* google */}
        <div className='google'>
          <div onClick={showGoogleModal}>
            <Google />
          </div>
          <CustomModal visible={isGoogleModalVisible} onClose={closeGoogleModal}>
            <iframe
              title="Google Website"
              src="https://www.google.com.tr/intl/tr/chrome/?brand=YTUH&gclid=CjwKCAjw8ZKmBhArEiwAspcJ7klRxZ2U3ttXud4Rq-7YAT4Yb3m-4BVLVz5YZN_OtjSg-3-vvf5tEhoCQ8AQAvD_BwE&gclsrc=aw.ds"
            />
          </CustomModal>
        </div>

        {/* pc */}
        <div className='this-pc'>
          <div onClick={showPcModal}>
            <Pc />
          </div>
          <CustomModal visible={isPcModalVisible} onClose={closePcModal}>
            <PcDetail/>
          </CustomModal>
        </div>
      </div>
      <BottomBar/>
    </div>
  );
}

export default Desktop;
