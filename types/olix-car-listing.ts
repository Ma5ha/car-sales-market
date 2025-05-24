export interface CarListing {
  id: number;
  type: string;
  views: number;
  title: string;
  slug: string;
  short_description: string | null;
  additional: {
    description: string;
    created_at: number;
    updated_at: number;
  };
  user: {
    id: number;
    type: string;
    username: string;
    avatar: string;
    medals: {
      type: string;
      text: string;
      value: number;
      url: string;
    }[];
    delivery_enabled: boolean;
    settings: {
      privacy: {
        allow_comments: boolean;
        allow_view_phone: boolean;
        allow_private_messages: boolean;
      };
    };
    avg_response_time: number;
    phone: string;
    phone_verified: boolean;
    location: {
      id: number;
      name: string;
      location: {
        lat: string;
        lon: string;
      };
      canton_id: number;
    };
  };
  show_price: boolean;
  price: number;
  display_price: string;
  regular_price: number;
  has_discount: boolean;
  price_history: {
    price: number;
    created_at: number;
  }[];
  listing_type: string;
  price_by_agreement: boolean;
  visible: boolean;
  quantity: number;
  feedbacks: number;
  questions: number;
  status: string;
  available: boolean;
  state: string;
  shipping: string;
  shipping_available: boolean;
  free_delivery: boolean;
  sponsored: number;
  highlighted: boolean | null;
  urgent: boolean | null;
  exchange_for: boolean | null;
  attributes: {
    id: number;
    type: string;
    value: string | number;
    name: string;
    required: boolean;
    group_name: string;
    group_order: number;
    order: number;
  }[];
  model_id: number;
  category_id: number;
  categories_all: {
    id: number;
    name: string;
  }[];
  image_masking: boolean;
  image_masking_status: string;
  images_old: string[];
  images: string[];
  cities: {
    id: number;
    name: string;
    location: {
      lat: string;
      lon: string;
    };
    canton_id: number;
  }[];
  category: {
    id: number;
    name: string;
    name_singular: string;
    slug: string;
    parent_id: number;
    order: number;
    desktop_order: number;
    top_category: boolean;
    highlighted: boolean;
    shipping_available: boolean;
    sensitive_content: boolean;
    post_option: string | null;
    show_price: boolean;
    show_brand: boolean;
    brand_required: boolean;
    model_required: boolean;
    has_models: boolean;
    show_condition: boolean;
    show_map: boolean;
    listing_fee: number;
    booking_enabled: boolean;
    base_listing_price: number;
    disclaimer: string | null;
    icon: string | null;
    show_stories: boolean;
  };
  brand: {
    id: number;
    name: string;
    slug: string;
  };
  model: {
    id: number;
    name: string;
    slug: string;
  };
  date: number;
  sku_number: string | null;
  created_at: number;
}
