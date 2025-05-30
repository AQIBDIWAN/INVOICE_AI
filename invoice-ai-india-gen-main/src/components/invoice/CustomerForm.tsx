import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { useInvoice } from "@/contexts/InvoiceContext";
import { fetchGSTDetails, validateGST, saveGSTDetailsToLocalStorage } from "@/utils/gstUtils";
import { useToast } from "@/components/ui/use-toast";

const CustomerForm = () => {
  const { customer, setCustomer } = useInvoice();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGSTSearch = async () => {
    if (!customer.gstNumber || !validateGST(customer.gstNumber)) {
      toast({
        title: "Invalid GST Number",
        description: "Please enter a valid 15-digit GST number",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    try {
      const details = await fetchGSTDetails(customer.gstNumber);
      if (details) {
        // Create a properly merged object with the new details
        const updatedCustomer = {
          ...customer,
          name: details.name || customer.name,
          businessName: details.businessName || customer.businessName,
          state: details.state || customer.state,
          city: details.city || customer.city
        };
        
        // Update the customer state with the complete object
        setCustomer(updatedCustomer);
        
        toast({
          title: "GST Details Found",
          description: "Customer details have been automatically populated",
        });
        
        console.log("Updated customer details:", updatedCustomer);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch GST details",
        variant: "destructive"
      });
      console.error("GST fetch error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomer(prev => ({
      ...prev,
      [name]: value
    }));
    
    // If user changes a field and there's a GST number present, store the updated details
    if (customer.gstNumber && validateGST(customer.gstNumber) && name !== "gstNumber") {
      // Create data object with current customer details
      const customerData = {
        name: customer.name,
        businessName: customer.businessName,
        state: customer.state,
        city: customer.city
      };
      
      // Save to localStorage
      saveGSTDetailsToLocalStorage(customer.gstNumber, customerData);
      console.log("Saved updated customer GST details to localStorage");
    }
  };

  return (
    <div className="space-y-4 animate-fade-in">
      <h2 className="text-lg font-semibold text-gray-800">Customer Information</h2>
      
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 space-y-2">
            <Label htmlFor="customerGstNumber">GST Number</Label>
            <div className="flex gap-2">
              <Input 
                id="customerGstNumber"
                name="gstNumber"
                placeholder="22AAAAA0000A1Z5"
                value={customer.gstNumber}
                onChange={handleChange}
                className="flex-1"
              />
              <Button 
                type="button" 
                onClick={handleGSTSearch}
                variant="outline"
                disabled={isLoading}
              >
                <Search className="h-4 w-4 mr-2" />
                {isLoading ? "Searching..." : "Verify"}
              </Button>
            </div>
          </div>
          
          <div className="flex-1 space-y-2">
            <Label htmlFor="customerBusinessName">Business Name</Label>
            <Input 
              id="customerBusinessName"
              name="businessName"
              placeholder="XYZ Corporation"
              value={customer.businessName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 space-y-2">
            <Label htmlFor="customerName">Contact Name</Label>
            <Input 
              id="customerName"
              name="name"
              placeholder="Amit Kumar"
              value={customer.name}
              onChange={handleChange}
            />
          </div>
          
          <div className="flex-1 space-y-2">
            <Label htmlFor="customerEmail">Email</Label>
            <Input 
              id="customerEmail"
              name="email"
              type="email"
              placeholder="customer@example.com"
              value={customer.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 space-y-2">
            <Label htmlFor="customerAddress">Address</Label>
            <Input 
              id="customerAddress"
              name="address"
              placeholder="456 Customer Street"
              value={customer.address}
              onChange={handleChange}
            />
          </div>
          
          <div className="flex-1 space-y-2">
            <Label htmlFor="customerCity">City</Label>
            <Input 
              id="customerCity"
              name="city"
              placeholder="Delhi"
              value={customer.city}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 space-y-2">
            <Label htmlFor="customerState">State</Label>
            <Input 
              id="customerState"
              name="state"
              placeholder="Delhi"
              value={customer.state}
              onChange={handleChange}
            />
          </div>
          
          <div className="flex-1 space-y-2">
            <Label htmlFor="customerPincode">PIN Code</Label>
            <Input 
              id="customerPincode"
              name="pincode"
              placeholder="110001"
              value={customer.pincode}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex-1 space-y-2">
          <Label htmlFor="customerPhone">Phone</Label>
          <Input 
            id="customerPhone"
            name="phone"
            placeholder="9876543210"
            value={customer.phone}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerForm;
