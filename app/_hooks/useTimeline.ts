import { useState, useEffect } from 'react';
import { TimelineMarking } from '../_types/timeline';
import { apiClient, endpoints } from '../_lib/api';

export const useTimeline = () => {
  const [timelineMarkings, setTimelineMarkings] = useState<TimelineMarking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTimeline = async () => {
    try {
      setLoading(true);
      const result = await apiClient.get(endpoints.timeline);
      setTimelineMarkings(result.data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setTimelineMarkings([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTimeline();
  }, []);

  return {
    timelineMarkings,
    loading,
    error,
    refetch: fetchTimeline,
  };
};