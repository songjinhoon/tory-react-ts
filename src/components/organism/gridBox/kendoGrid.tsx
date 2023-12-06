import '@progress/kendo-theme-default/dist/all.css';
import {
  Grid,
  GridColumn,
  GridDataStateChangeEvent,
  GridPageChangeEvent,
  GridSortChangeEvent,
} from '@progress/kendo-react-grid';
import React, {
  CSSProperties,
  FC,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { DataResult, process, State } from '@progress/kendo-data-query';
import { PagerTargetEvent } from '@progress/kendo-react-data-tools';
import { ColumnMenuCheckboxFilter } from '@components/organism/gridBox/columnMenu';
import Button from '@components/atom/button';

interface OptionColumn {
  key: string;
  value: string;
  width?: string;
}

interface Props {
  datas: any[];
  style: CSSProperties;
  count: number;
  previous: string;
  next: string;
  options?: {
    columns: OptionColumn[];
  };
}

interface DataState extends State {}

const initialOption: DataState = {
  skip: 0,
  take: 20,
  sort: [],
  group: [],
};

const KendoGrid: FC<Props> = ({
  datas,
  style,
  count,
  previous,
  next,
  options,
}) => {
  const [result, setResult] = useState<DataResult>();
  const [dataState, setDataState] = useState<DataState>(initialOption);
  const [pageSizeValue, setPageSizeValue] = useState<
    number | string | undefined
  >();

  const getGridOption = useCallback(
    (setting: DataState) => {
      return {
        result: process(datas.slice(0), setting),
        dataState: setting,
      };
    },
    [datas],
  );

  const updateFilter = useCallback(
    (event: GridDataStateChangeEvent) => {
      const gridOption = getGridOption({
        ...dataState,
        filter: event.dataState.filter,
      });
      setResult(gridOption.result);
      setDataState(gridOption.dataState);
    },
    [getGridOption, dataState],
  );

  const updatePage = useCallback(
    (event: GridPageChangeEvent) => {
      const targetEvent = event.targetEvent as PagerTargetEvent;
      const take = targetEvent.value === 'All' ? datas.length : event.page.take;
      if (targetEvent.value) {
        setPageSizeValue(targetEvent.value);
      }

      const gridOption = getGridOption({
        ...dataState,
        ...event.page,
        take,
      });
      setResult(gridOption.result);
      setDataState(gridOption.dataState);
    },
    [getGridOption, datas, dataState],
  );

  const updateSort = useCallback(
    (e: GridSortChangeEvent) => {
      const gridOption = getGridOption({
        ...dataState,
        sort: e.sort,
      });
      setResult(gridOption.result);
      setDataState(gridOption.dataState);
    },
    [getGridOption, dataState],
  );

  const getUpdateButton = useCallback(
    (e: any) => (
      <td style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          event={() => {
            console.log(e);
            alert('gg');
          }}
        >
          Edit
        </Button>
      </td>
    ),
    [],
  );

  useEffect(() => {
    const gridOption = getGridOption(initialOption);
    setResult(gridOption.result);
    setDataState(gridOption.dataState);
  }, [getGridOption]);

  return (
    <div style={style}>
      {result && (
        <Grid
          style={{ height: '100%' }}
          {...dataState}
          data={result}
          sortable={true}
          pageable={{
            buttonCount: 5,
            pageSizes: [20, 30, 'All'],
            pageSizeValue,
          }}
          total={count}
          onDataStateChange={updateFilter}
          onPageChange={updatePage}
          onSortChange={updateSort}
        >
          {options?.columns.map((data) => {
            if (data.key === 'resource') {
              return (
                <GridColumn
                  key={data.key}
                  field={data.key}
                  title={data.value}
                  width={data.width}
                  cell={(e) => {
                    return (
                      <td>
                        <img
                          width={70}
                          src={e.dataItem.resource}
                          alt={'pokemonImage'}
                        ></img>
                      </td>
                    );
                  }}
                  filter={'boolean'}
                  columnMenu={(test) =>
                    ColumnMenuCheckboxFilter({
                      ...test,
                      data: datas,
                    })
                  }
                ></GridColumn>
              );
            } else if (data.key === 'url') {
              return (
                <GridColumn
                  key={data.value}
                  title={data.value}
                  cell={(e) => getUpdateButton(e)}
                ></GridColumn>
              );
            } else {
              return (
                <GridColumn
                  key={data.key}
                  field={data.key}
                  title={data.value}
                  width={data.width}
                  filter={'boolean'}
                  columnMenu={(test) =>
                    ColumnMenuCheckboxFilter({
                      ...test,
                      data: datas,
                    })
                  }
                ></GridColumn>
              );
            }
          })}
        </Grid>
      )}
    </div>
  );
};

export default KendoGrid;
