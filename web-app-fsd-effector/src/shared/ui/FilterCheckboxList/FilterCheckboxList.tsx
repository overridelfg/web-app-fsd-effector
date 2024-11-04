import {
  Box,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
} from '@mui/material';

interface FilterCheckboxListProps {
  title: string;
  filterName: string;
  filterList: string[];
  selectedFilters: string[];
  filterHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterCheckboxList: React.FC<FilterCheckboxListProps> = ({
  title,
  filterList,
  selectedFilters,
  filterHandler,
}) => {
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
        {filterList.map((item, id) => {
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

export default FilterCheckboxList;
