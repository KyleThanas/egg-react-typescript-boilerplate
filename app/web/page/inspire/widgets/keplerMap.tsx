import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root'
import { connect } from 'react-redux';
import KeplerGl from 'kepler.gl';
import { addDataToMap, wrapTo } from 'kepler.gl/actions';
import { theme } from 'kepler.gl/styles';
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import { ThemeProvider } from 'styled-components';
import { IKeplerProps, IKeplerJson } from 'types/common';
import configGalaxy from '../data/galaxy-config';

// longitude 纬度
// latitude 经度
const MAPBOX_TOKEN = 'pk.eyJ1IjoieGlhb25pdSIsImEiOiJjamsxNm9oczMwNzk4M3dsYmNsdjIxYm4xIn0.xaNqu5WkkTDwuBR2zk2M9Q'; // eslint-disable-line

const KeplerMapContainer: React.FC<IKeplerProps> = props => {
  console.log('props: ', props);
  // const { dispatch } = props;
  // console.log('props: ', props);
  // console.log('dispatch: ', dispatch);
  const galaxyData = require('../data/galaxy-data.json')

  // demo数据
  useEffect(() => {
    // 处理config信息
    const {
      config: { config: showConfig },
    } = configGalaxy;

    // 处理数据信息
    const jsonToData = {
      info: {},
      data: {
        fields: [],
        rows: [],
      },
    };
    // galaxyData
    const useData = galaxyData as IKeplerJson;

    jsonToData.info = useData.info;
    jsonToData.data.fields = useData.datasets[0].data.fields;
    jsonToData.data.rows = useData.datasets[0].data.allData;

    // dispatch(
    //   wrapTo(
    //     'KeplerGlMap',
    //     addDataToMap({
    //       datasets: jsonToData,
    //       config: showConfig,
    //       option: {
    //         centerMap: true,
    //         readOnly: false,
    //       },
    //     }),
    //   ),
    // );
  }, []);

  return (
    <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <ThemeProvider theme={theme}>
        <AutoSizer>{({ height, width }) => <KeplerGl mapboxApiAccessToken={MAPBOX_TOKEN} id="KeplerGlMap" width={width} height={height} />}</AutoSizer>
      </ThemeProvider>
    </div>
  );
};

const mapStateToProps = state => state;
const dispatchToProps = dispatch => ({ dispatch });

// export default connect(mapStateToProps, dispatchToProps)(EASY_ENV_IS_DEV ? hot(KeplerMapContainer) : KeplerMapContainer);
export default EASY_ENV_IS_DEV ? hot(KeplerMapContainer) : KeplerMapContainer
