// import { GoogleMap, StandaloneSearchBox, useJsApiLoader } from '@react-google-maps/api';
// import type { FC } from 'react';

// export const MapComponent: FC = () => {
//   const { isLoaded } = useJsApiLoader({
//     googleMapsApiKey: import.meta.env.VITE_GOOGLE_KEY,
//     id: 'google-map-script',
//     libraries: ['places']
//   });

//   const mapContainerStyle = {
//     height: '400px',
//     width: '800px'
//   };

//   const center = {
//     lat: 38.685,
//     lng: -115.234
//   };

//   return (
//     <div className={'map'}>
//       {isLoaded ? (
//         <GoogleMap
//           center={center}
//           id={'searchbox-example'}
//           mapContainerStyle={mapContainerStyle}
//           zoom={2.5}
//         >
//           <StandaloneSearchBox>
//             <input
//               placeholder={'Customized your placeholder'}
//               style={{
//                 border: '1px solid transparent',
//                 borderRadius: '3px',
//                 boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
//                 boxSizing: 'border-box',
//                 fontSize: '14px',
//                 height: '32px',
//                 left: '50%',
//                 marginLeft: '-120px',
//                 outline: 'none',
//                 padding: '0 12px',
//                 position: 'absolute',
//                 width: '240px'
//               }}
//               type={'text'}
//             />
//           </StandaloneSearchBox>
//         </GoogleMap>
//       ) : null}
//     </div>
//   );
// };
