import { useState, useEffect } from "react";
import { Search, Phone, TrendingDown, TrendingUp, BarChart3 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";
import WaitTimeStats from "@/components/WaitTimeStats";
import CallTracker from "@/components/CallTracker";

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

  useEffect(() => {
    fetchAllCompanies();
  }, []);

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
      {/* Search Bar - Matches Figma */}
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search a company..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 h-14 text-base bg-card border-primary/20 focus:border-primary"
          />
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
              Try: Netflix, Hulu, Apple, Bank of America
            </p>
          </div>
        )}
      </div>

      {/* Selected Company - STACKED LAYOUT (Matches Figma) */}
      {selectedCompany && (
        <div className="max-w-3xl mx-auto space-y-6">
          
          {/* Header: See the wait before you dial */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              See the wait before you <span className="gradient-text">dial</span>
            </h2>
          </div>

          {/* Wait Time Cards (Best/Avoid) - Matches Figma */}
          <WaitTimeStats
            companyId={selectedCompany.id}
            companyName={selectedCompany.name}
          />

          {/* Divider */}
          <div className="border-t border-border my-8"></div>

          {/* Help the Community Section */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Help the Community
            </h3>
            
            {/* Company Info + Call Button */}
            <CallTracker 
              companyId={selectedCompany.id}
              companyName={selectedCompany.name}
              phoneNumber={selectedCompany.phone_number || "1-800-000-0000"}
            />
          </div>

        </div>
      )}

      {/* Empty State - Matches Figma */}
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
