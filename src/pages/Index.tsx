import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";
import WaitTimeStats from "@/components/WaitTimeStats";
import CallTracker from "@/components/CallTracker";

/**
 * CompanySearch Component
 * 
 * Allows users to search for companies and view their wait time stats
 * 
 * Features:
 * - Search bar to find companies
 * - Displays search results
 * - Shows stats + report form when a company is selected
 */

interface Company {
  id: string;
  name: string;
  category: string | null;
  phone_number: string | null;
}

export default function CompanySearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [companies, setCompanies] = useState<Company[]>([]);
  const [searchResults, setSearchResults] = useState<Company[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [loading, setLoading] = useState(false);

  // Load all companies on mount
  useEffect(() => {
    fetchAllCompanies();
  }, []);

  // Filter companies when search query changes
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const filtered = companies.filter(company =>
      company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (company.category && company.category.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    
    setSearchResults(filtered);
  }, [searchQuery, companies]);

  const fetchAllCompanies = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('companies')
        .select('id, name, category, phone_number')
        .order('name', { ascending: true });

      if (error) throw error;
      setCompanies(data || []);
    } catch (error) {
      console.error('Error fetching companies:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectCompany = (company: Company) => {
    setSelectedCompany(company);
    setSearchQuery(company.name);
    setSearchResults([]);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setSelectedCompany(null);
    setSearchResults([]);
  };

  return (
    <div className="space-y-8">
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search for a company (e.g., Netflix, Apple, Bank of America)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 pr-24 h-14 text-base bg-card border-primary/20 focus:border-primary"
          />
          {searchQuery && (
            <Button
              onClick={handleClearSearch}
              variant="ghost"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-10 px-4 text-sm"
            >
              Clear
            </Button>
          )}
        </div>

        {/* Search Results Dropdown */}
        {searchResults.length > 0 && (
          <div className="mt-2 bg-card border border-border rounded-xl shadow-lg max-h-80 overflow-y-auto">
            {searchResults.map((company) => (
              <button
                key={company.id}
                onClick={() => handleSelectCompany(company)}
                className="w-full text-left px-6 py-4 hover:bg-cyber-surface transition-colors border-b border-border last:border-b-0"
              >
                <div className="font-medium text-foreground">
                  {company.name}
                </div>
                {company.category && (
                  <div className="text-sm text-muted-foreground mt-1">
                    {company.category}
                  </div>
                )}
              </button>
            ))}
          </div>
        )}

        {/* No Results */}
        {searchQuery && searchResults.length === 0 && !selectedCompany && (
          <div className="mt-2 bg-card border border-border rounded-xl p-6 text-center">
            <p className="text-muted-foreground">
              No companies found matching "{searchQuery}"
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Try searching for Netflix, Hulu, Apple, or Bank of America
            </p>
          </div>
        )}
      </div>

      {/* Selected Company Details */}
      {selectedCompany && (
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Company Info Card */}
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  {selectedCompany.name}
                </h2>
                <div className="space-y-1">
                  {selectedCompany.category && (
                    <p className="text-sm text-muted-foreground">
                      Category: <span className="text-primary">{selectedCompany.category}</span>
                    </p>
                  )}
                  {selectedCompany.phone_number && (
                    <p className="text-sm text-muted-foreground">
                      Phone: <span className="text-foreground">{selectedCompany.phone_number}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Stats and Report Form Side by Side */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Wait Time Stats */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Wait Time Insights
              </h3>
              <WaitTimeStats
                companyId={selectedCompany.id}
                companyName={selectedCompany.name}
              />
            </div>

            {/* Report Form */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Help the Community
              </h3>
              <CallTracker
                companyId={selectedCompany.id}
                companyName={selectedCompany.name}
                phoneNumber={selectedCompany.phone_number || "1-800-000-0000"}
              />
            </div>
          </div>
        </div>
      )}

      {/* Empty State - No Search, No Selection */}
      {!searchQuery && !selectedCompany && (
        <div className="max-w-2xl mx-auto text-center py-12">
          <div className="bg-card border border-border rounded-xl p-8">
            <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Search for a Company
            </h3>
            <p className="text-muted-foreground mb-6">
              Find wait time information for customer support lines
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSearchQuery("Netflix")}
              >
                Netflix
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSearchQuery("Apple")}
              >
                Apple
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSearchQuery("Bank")}
              >
                Bank of America
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSearchQuery("Hulu")}
              >
                Hulu
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


/**
 * USAGE EXAMPLE in Index.tsx:
 * 
 * import CompanySearch from '@/components/CompanySearch';
 * 
 * // Replace your current ReportWaitTime section with:
 * <section className="py-16 bg-gradient-cyber">
 *   <div className="container mx-auto px-6">
 *     <div className="text-center mb-12">
 *       <h2 className="text-3xl font-semibold mb-3">
 *         Check <span className="gradient-text">Wait Times</span>
 *       </h2>
 *       <p className="text-base text-muted-foreground max-w-xl mx-auto">
 *         Search for any company to see current wait times and help others
 *       </p>
 *     </div>
 *     
 *     <CompanySearch />
 *   </div>
 * </section>
 */