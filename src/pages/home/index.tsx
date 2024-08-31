import { Layout } from '@/components/custom/layout'
// import { Search } from '@/components/search'
import ThemeSwitch from '@/components/theme-switch'
import { TopNav } from '@/components/top-nav'
import { UserNav } from '@/components/user-nav'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Search, ChevronLeft, ChevronRight } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ScrollArea } from '@/components/ui/scroll-area'
export default function Home() {
  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <Layout.Header>
        <TopNav links={topNav} />
        <div className='ml-auto flex items-center space-x-4'>
          {/* <Search /> */}
          <ThemeSwitch />
          <UserNav />
        </div>
      </Layout.Header>

      {/* ===== Main ===== */}
      <Layout.Body>
        <div className='flex min-h-screen flex-col '>
          <header className='flex items-center justify-between bg-primary  text-primary-foreground'></header>
          <main className='flex-grow'>
            <section className='bg-primary px-4 py-20 text-center text-white'>
              <h1 className='mb-4 text-4xl font-bold'>
                Browse our journals that are just right for you
              </h1>
              <p className='mb-8'>
                Choose from over 20,700 journals and learning paths, with dozens
                added every week. Top it off with courses that round out your
                skills and enrich your day-to-day.
              </p>
              <div className='relative mx-auto max-w-2xl'>
                <Input
                  className='w-full rounded-full px-8 py-8'
                  placeholder='Search Article'
                  type='text'
                />
                <Button
                  className='absolute right-5 top-3 rounded-full'
                  size='icon'
                  variant={'ghost'}
                >
                  <Search className='h-8 w-8' />
                  <span className='sr-only'>Search</span>
                </Button>
              </div>
            </section>
            <section className='px-4 py-12'>
              <div className='mx-auto max-w-6xl'>
                <div className='mb-8 flex items-center justify-between'>
                  <p>31 results</p>
                  <div className='flex items-center space-x-2'>
                    <Select>
                      <SelectTrigger className='w-[180px]'>
                        <SelectValue placeholder='Sort by' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='best-match'>Best match</SelectItem>
                        <SelectItem value='most-recent'>Most recent</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant='outline' size='icon'>
                      <ChevronLeft className='h-4 w-4' />
                    </Button>
                    <Button variant='outline' size='icon'>
                      <ChevronRight className='h-4 w-4' />
                    </Button>
                  </div>
                </div>
                <div className='grid gap-8  md:grid-cols-[250px_1fr]'>
                  <aside className='space-y-5'>
                    <Card>
                      <CardHeader>
                        <CardTitle>Filters</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className='space-y-4'>
                          <div>
                            <h3 className='mb-2 font-semibold'>
                              Article types
                            </h3>
                            <div className='space-y-2'>
                              <div className='flex items-center'>
                                <Checkbox id='abstract' />
                                <label htmlFor='abstract' className='ml-2'>
                                  Abstract
                                </label>
                              </div>
                              <div className='flex items-center'>
                                <Checkbox id='fulltext' />
                                <label htmlFor='fulltext' className='ml-2'>
                                  Free Full Text
                                </label>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h3 className='mb-2 font-semibold'>
                              Publication dates
                            </h3>
                            <div className='space-y-2'>
                              <div className='flex items-center'>
                                <Checkbox id='1year' />
                                <label htmlFor='1year' className='ml-2'>
                                  1 year
                                </label>
                              </div>
                              <div className='flex items-center'>
                                <Checkbox id='5years' />
                                <label htmlFor='5years' className='ml-2'>
                                  5 years
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Article Attribute</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className='space-y-2'>
                          {['Assoiciated Data'].map((type) => (
                            <div
                              key={type}
                              className='flex items-center space-x-2'
                            >
                              <Checkbox
                                id={type.toLowerCase().replace(' ', '-')}
                              />
                              <label
                                htmlFor={type.toLowerCase().replace(' ', '-')}
                              >
                                {type}
                              </label>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Article Type</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className='space-y-2'>
                          {[
                            'Books and Documents',
                            'Clinical Trial',
                            'Meta-Analysis',
                            'Randomized Controlled Trial',
                            'Review',
                            'Systematic Review',
                          ].map((type) => (
                            <div
                              key={type}
                              className='flex items-center space-x-2'
                            >
                              <Checkbox
                                id={type.toLowerCase().replace(' ', '-')}
                              />
                              <label
                                htmlFor={type.toLowerCase().replace(' ', '-')}
                              >
                                {type}
                              </label>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </aside>
                  <div className='space-y-4'>
                    <ScrollArea className='h-[1200px]'>
                      {[...Array(10)].map((_, i) => (
                        <Card key={i} className='mb-4'>
                          <CardContent className='pt-6'>
                            <h2 className='mb-2 text-lg font-semibold text-blue-800'>
                              Effect of nutrition awareness on utilization of
                              Orange Fleshed Sweetpotato among vulnerable
                              populations in Kenya
                            </h2>
                            <p className='mb-2 text-sm text-gray-600'>
                              Cite: Shikuku KM, Okello JJ, Wambugu S, Sindi K,
                              Low JW, McEwan M.
                            </p>
                            <p className='mb-2 text-sm text-green-800'>
                              Share: Food Secur. 2023;15(2):479-491. doi:
                              10.1007/s12571-022-01326-4. Epub 2022 Dec 19.
                            </p>
                            <p className='mb-2 text-sm text-orange-800'>
                              PMID: 36570637 Free PMC article.
                            </p>
                            <p className='mb-2 text-sm'>
                              We investigated the effects of junction curvature
                              on adhesion in groups of orange sclerocytes, a
                              type of cell found in the lens of the eye. We
                              found that cells in curved junctions adhered more
                              strongly than cells in straight junctions. This
                              was due to a number of factors, including the
                              increased tension in curved junctions and the
                              presence of a protein called talin, which is
                              involved in cell adhesion. Our results suggest
                              that junction curvature plays an important role in
                              the organization and function of tissues.
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </ScrollArea>
                  </div>
                </div>
                <div className='mt-8 text-center'>
                  <Button className='bg-primary p-6 text-white hover:bg-blue-700'>
                    Show More Results
                  </Button>
                </div>
              </div>
            </section>
          </main>
        </div>
      </Layout.Body>
    </Layout>
  )
}

const topNav = [
  {
    title: 'Home',
    href: '/',
    isActive: true,
  },
]
