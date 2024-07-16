// @ts-ignore
// @ts-nocheck
import { Layout } from '@/components/custom/layout'
import { Search } from '@/components/search'
import ThemeSwitch from '@/components/theme-switch'
import { TopNav } from '@/components/top-nav'
import { UserNav } from '@/components/user-nav'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  TableHeader,
} from '@/components/ui/table'
import { useMemo, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { IconSearch } from '@tabler/icons-react'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
export default function Journals() {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortColumn, setSortColumn] = useState(null)
  const [sortDirection, setSortDirection] = useState(null)
  const [selectedJournals, setSelectedJournals] = useState([])
  const journals = [
    {
      title: 'The Impact of Artificial Intelligence on Society',
      author: 'John Doe',
      date: '2022-05-15',
      category: 'Technology',
      citationCount: 120,
      keywords: ['AI', 'Society', 'Ethics'],
      published: true,
      doi: '10.1234/journal.ai.2022.01',
    },
    {
      title: 'Sustainable Urban Planning Strategies',
      author: 'Jane Smith',
      date: '2021-09-01',
      category: 'Urban Studies',
      citationCount: 85,
      keywords: ['Sustainability', 'Urban Planning', 'Environment'],
      published: true,
      doi: '10.5678/journal.urban.2021.02',
    },
    {
      title: 'The Psychology of Workplace Motivation',
      author: 'Michael Johnson',
      date: '2023-02-28',
      category: 'Psychology',
      citationCount: 42,
      keywords: ['Motivation', 'Workplace', 'Organizational Behavior'],
      published: true,
      doi: '10.9012/journal.psych.2023.01',
    },
    {
      title: 'Advances in Renewable Energy Technologies',
      author: 'Emily Brown',
      date: '2022-11-10',
      category: 'Energy',
      citationCount: 78,
      keywords: ['Renewable Energy', 'Sustainability', 'Technology'],
      published: true,
      doi: '10.3456/journal.energy.2022.03',
    },
    {
      title: 'The Role of Social Media in Political Discourse',
      author: 'David Lee',
      date: '2021-03-20',
      category: 'Political Science',
      citationCount: 92,
      keywords: ['Social Media', 'Politics', 'Communication'],
      published: true,
      doi: '10.7890/journal.polisci.2021.01',
    },
  ]
  const filteredJournals = useMemo(() => {
    return journals.filter((journal) =>
      Object.values(journal).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
  }, [searchTerm, journals])
  const sortedJournals = useMemo(() => {
    if (!sortColumn || !sortDirection) return filteredJournals
    return filteredJournals.sort((a, b) => {
      const valueA = a[sortColumn]
      const valueB = b[sortColumn]
      if (valueA < valueB) return sortDirection === 'asc' ? -1 : 1
      if (valueA > valueB) return sortDirection === 'asc' ? 1 : -1
      return 0
    })
  }, [filteredJournals, sortColumn, sortDirection])
  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(column)
      setSortDirection('asc')
    }
  }

  const handleSelectJournal = (journal) => {
    if (selectedJournals.includes(journal)) {
      setSelectedJournals(selectedJournals.filter((j) => j !== journal))
    } else {
      setSelectedJournals([...selectedJournals, journal])
    }
  }

  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <Layout.Header>
        <TopNav links={topNav} />
        <div className='ml-auto flex items-center space-x-4'>
          <Search />
          <ThemeSwitch />
          <UserNav />
        </div>
      </Layout.Header>

      {/* ===== Main ===== */}
      <Layout.Body>
        <div className='p-4 md:p-6'>
          <div className='mb-4 flex items-center justify-between'>
            <h1 className='text-2xl font-bold'>Journal Articles</h1>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3'>
                <IconSearch className='h-5 w-5 text-muted-foreground' />
              </div>
              <Input
                type='search'
                placeholder='Search...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='block w-full rounded-lg border border-muted bg-background py-2 pl-10 pr-4 text-sm text-foreground focus:border-primary focus:ring-primary'
              />
            </div>
          </div>
          <div className='overflow-x-auto'>
            <div className='rounded-md border'>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>
                      <Checkbox
                        checked={
                          selectedJournals.length === sortedJournals.length
                        }
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedJournals(sortedJournals)
                          } else {
                            setSelectedJournals([])
                          }
                        }}
                      />
                    </TableHead>
                    <TableHead
                      className='cursor-pointer'
                      onClick={() => handleSort('title')}
                    >
                      Title
                      {sortColumn === 'title' && (
                        <span className='ml-2'>
                          {sortDirection === 'asc' ? '\u25B2' : '\u25BC'}
                        </span>
                      )}
                    </TableHead>
                    <TableHead
                      className='cursor-pointer'
                      onClick={() => handleSort('author')}
                    >
                      Author
                      {sortColumn === 'author' && (
                        <span className='ml-2'>
                          {sortDirection === 'asc' ? '\u25B2' : '\u25BC'}
                        </span>
                      )}
                    </TableHead>
                    <TableHead
                      className='cursor-pointer'
                      onClick={() => handleSort('date')}
                    >
                      Date
                      {sortColumn === 'date' && (
                        <span className='ml-2'>
                          {sortDirection === 'asc' ? '\u25B2' : '\u25BC'}
                        </span>
                      )}
                    </TableHead>
                    <TableHead
                      className='cursor-pointer'
                      onClick={() => handleSort('category')}
                    >
                      Category
                      {sortColumn === 'category' && (
                        <span className='ml-2'>
                          {sortDirection === 'asc' ? '\u25B2' : '\u25BC'}
                        </span>
                      )}
                    </TableHead>
                    <TableHead
                      className='cursor-pointer'
                      onClick={() => handleSort('citationCount')}
                    >
                      Citation Count
                      {sortColumn === 'citationCount' && (
                        <span className='ml-2'>
                          {sortDirection === 'asc' ? '\u25B2' : '\u25BC'}
                        </span>
                      )}
                    </TableHead>
                    <TableHead
                      className='cursor-pointer'
                      onClick={() => handleSort('keywords')}
                    >
                      Keywords
                      {sortColumn === 'keywords' && (
                        <span className='ml-2'>
                          {sortDirection === 'asc' ? '\u25B2' : '\u25BC'}
                        </span>
                      )}
                    </TableHead>
                    <TableHead
                      className='cursor-pointer'
                      onClick={() => handleSort('published')}
                    >
                      Published
                      {sortColumn === 'published' && (
                        <span className='ml-2'>
                          {sortDirection === 'asc' ? '\u25B2' : '\u25BC'}
                        </span>
                      )}
                    </TableHead>
                    <TableHead
                      className='cursor-pointer'
                      onClick={() => handleSort('doi')}
                    >
                      DOI
                      {sortColumn === 'doi' && (
                        <span className='ml-2'>
                          {sortDirection === 'asc' ? '\u25B2' : '\u25BC'}
                        </span>
                      )}
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedJournals.map((journal, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Checkbox
                          checked={selectedJournals.includes(journal)}
                          onCheckedChange={() => handleSelectJournal(journal)}
                        />
                      </TableCell>
                      <TableCell>{journal.title}</TableCell>
                      <TableCell>{journal.author}</TableCell>
                      <TableCell>{journal.date}</TableCell>
                      <TableCell>{journal.category}</TableCell>
                      <TableCell>{journal.citationCount}</TableCell>
                      <TableCell>
                        {journal.keywords.map((keyword, i) => (
                          <span key={i} className='mr-2'>
                            {keyword}
                          </span>
                        ))}
                      </TableCell>
                      <TableCell>
                        {journal.published ? (
                          <Badge variant='outline'>Published</Badge>
                        ) : (
                          <Badge variant='destructive'>Unpublished</Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        <p>{journal.doi}</p>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href='#' />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href='#'>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href='#' isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href='#'>3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href='#' />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </Layout.Body>
    </Layout>
  )
}

const topNav = [
  {
    title: 'Overview',
    href: 'dashboard/overview',
    isActive: true,
  },
  // {
  //   title: 'Customers',
  //   href: 'dashboard/customers',
  //   isActive: false,
  // },
  // {
  //   title: 'Products',
  //   href: 'dashboard/products',
  //   isActive: false,
  // },
  // {
  //   title: 'Settings',
  //   href: 'dashboard/settings',
  //   isActive: false,
  // },
]
