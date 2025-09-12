'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight
} from 'lucide-react';
import Card from '../../components/ui/Card';

interface DesignWork {
  id: string;
  title: string;
  category: string;
  image: string;
  description?: string;
  tags: string[];
  uploadDate: string;
  likes: number;
}

const ShowcasePage = () => {
  const [works, setWorks] = useState<DesignWork[]>([]);
  const [filteredWorks, setFilteredWorks] = useState<DesignWork[]>([]);


  const sampleWorks: DesignWork[] = [
    {
      id: '1',
      title: 'Brand Identity',
      category: 'branding',
      image: '/corporate-mug-design.jpg',
      description: '',
      tags: ['branding'],
      uploadDate: '2024-01-15',
      likes: 24
    },
    {
      id: '2',
      title: 'Mug Design',
      category: 'custom-printing',
      image: '/corporate-mug-design.jpg',
      description: '',
      tags: ['printing'],
      uploadDate: '2024-01-10',
      likes: 18
    }
  ];

  useEffect(() => {
    setWorks(sampleWorks);
    setFilteredWorks(sampleWorks);
  }, []);

  useEffect(() => {
    setFilteredWorks(works);
  }, [works]);


  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <section className="bg-white border-b border-neutral-200">
        <div className="container-custom py-12">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-neutral-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our <span className="text-gradient">Work</span>
            </motion.h1>
            <motion.p
              className="text-xl text-neutral-600 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Explore the creative journey and diverse design capabilities of BUNDU KHAN
            </motion.p>
          </div>
        </div>
      </section>


      {/* Gallery */}
      <section className="section-padding">
        <div className="container-custom">
          {filteredWorks.length === 0 ? (
            <div className="text-center py-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-neutral-500"
              >
                <h3 className="text-xl font-semibold mb-2">No designs available</h3>
                <p>Check back soon for new work</p>
              </motion.div>
            </div>
          ) : (
            <motion.div
              className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              layout
            >
              <AnimatePresence>
                {filteredWorks.map((work) => (
                  <motion.div
                    key={work.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card 
                      className="group overflow-hidden" 
                      hover 
                      animate
                      padding="none"
                    >
                      <div 
                        className="relative aspect-[4/3] overflow-hidden group cursor-pointer"
                        onClick={() => window.open(work.image, '_blank')}
                      >
                        <img
                          src={work.image}
                          alt={work.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <div className="flex items-center gap-2 text-white">
                            <span className="text-lg font-semibold">{work.title}</span>
                            <motion.div
                              initial={{ x: -5 }}
                              animate={{ x: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ArrowRight className="w-5 h-5" />
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

    </div>
  );
};

export default ShowcasePage;