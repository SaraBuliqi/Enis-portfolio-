import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Coffee, Heart, Users } from "lucide-react";
import { ASSETS, getProductionAssetUrl } from "@/assets";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-slate-900 to-black"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image and stats */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={getProductionAssetUrl(ASSETS.profile)}
                alt="Enis Buliqi"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                onError={(e) => {
                  console.error('Failed to load profile image:', e);
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>

            {/* Background decoration */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
          </div>

          {/* Right side - Content */}
          <div>
            <h2 className="text-5xl font-bold text-white mb-6">
              About <span className="text-purple-400">Me</span>
            </h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              I'm{" "}
              <span className="text-purple-400 font-normal">Enis Buliqi</span> a
              19 years old passionate graphic designer creating visual solutions
              that make brands stand out and connect with their audiences.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              My design philosophy centers around the belief that great design
              should not only look beautiful but also solve problems and tell
              compelling stories. I work closely with clients to understand
              their vision and translate it into impactful visual experiences.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Worked at{" "}
              <span className="text-purple-400 font-semibold">
                Sharp Group L.L.C.
              </span>
              , currently{" "}
              <span className="text-purple-400 font-semibold">
                freelancer
              </span>
              .
            </p>

            {/* Key points */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-4 text-center">
                  <Award className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">300+</div>
                  <div className="text-gray-400 text-sm">Projects</div>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-4 text-center">
                  <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">25+</div>
                  <div className="text-gray-400 text-sm">Clients</div>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-4 text-center">
                  <Coffee className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">1000+</div>
                  <div className="text-gray-400 text-sm">Cups of Coffee</div>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-4 text-center">
                  <Heart className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">∞</div>
                  <div className="text-gray-400 text-sm">Passion</div>
                </CardContent>
              </Card>
            </div>

            {/* Mission statement */}
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-950/20 p-6 rounded-xl border border-purple-500/30">
              <h3 className="text-xl font-semibold text-white mb-3">
                My Mission
              </h3>
              <p className="text-gray-300 italic">
                "To create designs that not only capture attention but also
                inspire action, helping businesses and individuals communicate
                their unique stories through compelling visual experiences."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
