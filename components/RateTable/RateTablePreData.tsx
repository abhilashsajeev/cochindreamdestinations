

import NoteCard from './NoteCard';
import TableList from './TableList';

export default function RateTablePredata({ data, extra_km, description }: any) {
  
  return (
    <>
      <TableList data={data} description={description} />

      <NoteCard extra_km={extra_km} />
    </>
  );
}
