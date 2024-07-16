/**
 * v0 by Vercel.
 * @see https://v0.dev/t/VifeJR8PCdP
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table'

export default function JournalTable() {
  return (
    <div className='flex flex-col'>
      <div className='rounded-lg border shadow-sm'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Journal Name</TableHead>
              <TableHead>Number</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <p className='font-medium'>OPEN ACCESS JOURNAL</p>
              </TableCell>
              <TableCell>172394</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <p className='font-medium'>HOSTED ON INASP'S JOURNAL ONLINE</p>
              </TableCell>
              <TableCell>794</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <p className='font-medium'>ONLINE PUBLISHER BASED IN AFRICA</p>
              </TableCell>
              <TableCell>394</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <p className='font-medium'>DIRECTORY OF OPEN ACCESS (DOAJ)</p>
              </TableCell>
              <TableCell>94</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <p className='font-medium'>PUBLISHER IS A MEMBER OF COPE</p>
              </TableCell>
              <TableCell>34</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <p className='font-medium'>ON ISSN PORTAL</p>
              </TableCell>
              <TableCell>34</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
