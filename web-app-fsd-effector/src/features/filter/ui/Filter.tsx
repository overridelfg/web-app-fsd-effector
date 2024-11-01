import {
  Box,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
} from '@mui/material';
import { events, selectors } from '../model/filters';

interface FilterProps {
  list: string[];
  filterName: 'filmTitles' | 'genders';
  page?: string;
  title?: string;
}

const Filter: React.FC<FilterProps> = ({ list, filterName, title }) => {
  const { useFilters } = selectors;
  const selectedFilters = useFilters().queryParams[filterName];

  console.log(selectedFilters);

  const { updateListQueryParam } = events;

  const filterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateListQueryParam({ key: filterName, value: event.target.value });
  };

  return (
    <Stack>
      <Typography sx={{ fontWeight: 700 }}>{title}</Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          padding: '0.2rem',
        }}
      >
        {list.map((item, id) => {
          return (
            <FormControlLabel
              sx={{
                gap: '.5rem',
                marginLeft: '.5rem',
              }}
              label={item}
              key={id}
              control={
                <Checkbox
                  checked={
                    selectedFilters.find((name) => name === item) ? true : false
                  }
                  sx={{ alignSelf: 'flex-start', padding: 0 }}
                  value={item}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    filterHandler(e)
                  }
                />
              }
            />
          );
        })}
      </Box>
    </Stack>
  );
};

export default Filter;
